import { loadData } from "@/util/loader.ts";
import { Event, EventDetail } from "@/types";
import ical from "ical-generator";
import moment from "moment-timezone";
import { Module } from '@nuxt/types'


const iCalModule: Module = function icalModule(this: any) {
    const eventData = loadData<Event>(
        require.context("~/data/events", false, /\.yml$/),
        "events"
    );
    const events = eventData
        .flatMap((event: Event) =>
            event.events.map((eventDetail: EventDetail) => ({
                ...eventDetail,
                event: { ...event, events: [] },
                cancelled:
                    typeof eventDetail.cancelled === "undefined"
                        ? false
                        : eventDetail.cancelled,
                postponed:
                    typeof eventDetail.postponed === "undefined"
                        ? false
                        : eventDetail.postponed,
                tentative:
                    typeof eventDetail.tentative === "undefined"
                        ? false
                        : eventDetail.tentative
            }))
        )
        .sort(
            (a: EventDetail, b: EventDetail) =>
                moment(a.start).valueOf() - moment(b.start).valueOf()
        );

    const cal = ical({
        name: "Chattawooga Calendar",
        prodId: { company: "chattawooga.com", product: "ical-generator" },
        timezone: "America/New_York",
        domain: "chattawooga.com",
        url: "https://chattawooga.com/ical/events.ics"
    });
    events.forEach((e: EventDetail) =>
        cal.createEvent({
            start: moment(e.start),
            stamp: moment(e.start),
            end:
                e.end === null || e.end === undefined
                    ? moment(e.start).add(1, "hours")
                    : moment(e.end),
            summary: e.event.name
        })
    );

    this.options.build.plugins.push({
        apply(compiler: any) {
            compiler.plugin("emit", (compilation: any, cb: any) => {
                compilation.assets["ical/events.ics"] = { source: () => cal.toString(), size: () => cal.toString().length };
                cb()
            })
        }
    })
}

export default iCalModule;
