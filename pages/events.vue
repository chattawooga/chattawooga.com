<template>
  <v-container>
    <v-banner elevation="12">
      An up-to-date list of all local Chattanooga Furry meetups, conventions,
      hang-outs, art-jams and any other furry events.
      <br />Got an event to add?
      <nuxt-link to="/contactus"> Contact us </nuxt-link>
    </v-banner>
    <group-event v-for="event in events" :key="event.key" :event="event" />
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import moment from "moment-timezone";
import { Event, EventDetail } from "@/types";
import GroupEvent from "@/components/event.vue";
const events = (await queryContent<Event>("eve").find())
  .filter((e: Event) => e.events)
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
          : eventDetail.tentative,
    }))
  )
  .sort(
    (a: any, b: any) => moment(a.start).valueOf() - moment(b.start).valueOf()
  );

function getEvent(event: EventDetail): string {
  if (event.cancelled) {
    return "https://schema.org/EventCancelled";
  }

  if (event.postponed) {
    return "https://schema.org/EventPostponed";
  }

  return "https://schema.org/EventScheduled";
}

function jsonld() {
  return events.map((event: EventDetail) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    startDate: event.start,
    endDate: event.end,
    name: event.event.name,
    eventStatus: getEvent(event),
    description: event.event.about,
    location: {
      "@type": "Place",
      name: event.event.location,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.event.address.address,
        addressLocality: event.event.address.city,
        postalCode: event.event.address.postal,
        addressRegion: event.event.address.state,
        addressCountry: "US",
      },
    },
  }));
}
</script>

<style lang="scss">
</style>
