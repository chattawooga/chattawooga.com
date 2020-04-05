<template>
    <v-container>
        <v-banner elevation="12">
            An up-to-date list of all local Chattanooga Furry meetups, conventions, hang-outs, art-jams and any other furry events.
            <br>Got an event to add? Contact us.
        </v-banner>
        <v-alert
            type="warning"
            light
        >
            Due to the COVID-19 situation events may be postponed/cancelled, stay tuned for updates.
        </v-alert>
        <event v-for="event in events" :key="event.key" :event="event" />
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import moment from "moment-timezone";
import { Event, EventDetail } from "@/types";
import { loadData } from "@/util/loader.ts";

@Component
export default class extends Vue {
    events: EventDetail[] = [];
    async asyncData () {
        const eventData = await loadData<Event[]>(
            require.context("~/data/events", false, /\.yml$/),
            "events"
        );

        return {
            events: eventData
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
                    (a: any, b: any) =>
                        moment(a.start).valueOf() - moment(b.start).valueOf()
                )
        };
    }
}
</script>

<style lang="scss">
</style>
