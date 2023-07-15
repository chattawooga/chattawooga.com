<template>
  <v-card class="mx-auto mb-3" max-width="400" shaped>
    <v-img
      class="white--text align-end"
      height="150px"
      :src="`/static/images/${event.event.type}/${event.event.key}/icon.png`"
    >
      <v-card-title>
        <div>{{ event.event.name }}</div>
        <div v-if="event.text">
          <pre>{{ event.text }}</pre>
        </div>
        <div v-else>
          {{ startDate }}
          <br />
          {{ startTime }}
        </div>
      </v-card-title>

      <v-btn
        v-for="(value, key) in event.event.social"
        :key="key"
        absolute
        bottom
        right
        light
        small
        :href="getUrl(key, value)"
        target="_blank"
      >
        <v-icon>icon-{{ key }}</v-icon>
      </v-btn>
    </v-img>
    <v-card-text v-if="hasAlert()" class="pb-0">
      <v-alert v-if="event.cancelled" class="mb-0" type="warning">
        Cancelled
      </v-alert>
      <v-alert v-if="event.postponed" class="mb-0" type="info">
        Postponed
      </v-alert>
      <v-alert v-if="event.tentative" class="mb-0" type="info">
        Currently marked as tentative, details may change
      </v-alert>
    </v-card-text>
    <v-card-subtitle>
      {{ event.event.about }}
    </v-card-subtitle>
    <v-card-title class="pt-0" />
    <v-card-text>
      {{ event.event.location }}
      <br />
      {{
        `${event.event.address.address} ${event.event.address.city}, ${event.event.address.state}. ${event.event.address.postal}`
      }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import Vue from "vue";
import moment from "moment-timezone";
import { Event, EventDetail } from "@/types";

const props = defineProps<{
  event: EventDetail;
}>();

const startDate = computed(() =>
  moment.tz(props.event.start, "America/New_York").format("L")
);

const startTime = computed(() =>
  moment.tz(props.event.start, "America/New_York").format("LT")
);

function hasAlert(): boolean {
  return (
    props.event.cancelled || props.event.postponed || props.event.tentative
  );
}

function getUrl(key: string, value: string): string {
  switch (key) {
    case "discord":
      return `${value}`;
    case "etsy":
      return `https://etsy.com/shop/${value}`;
    case "facebook":
      return `https://facebook.com/${value}`;
    case "furaffinity":
      return `https://furaffinity.net/user/${value}`;
    case "ko-fi":
      return `https://ko-fi.com/${value}`;
    case "telegram":
      return `https://telegram.me/${value}`;
    case "twitter":
      return `https://twitter.com/${value}`;
    case "website":
      return `${value}`;
    case "youtube":
      return `https://youtube.com/${value}`;
  }

  return "";
}
</script>

<style lang="scss" scoped>
$text-border-shadow: #000;
$negWidth: -2px;
$width: 2px;
.v-card__title {
  font-size: 1.8em;
  text-shadow: $negWidth $negWidth 0 $text-border-shadow,
    0 $negWidth 0 $text-border-shadow, $width $negWidth 0 $text-border-shadow,
    $width 0 0 $text-border-shadow, $width $width 0 $text-border-shadow,
    0 $width 0 $text-border-shadow, $negWidth $width 0 $text-border-shadow,
    $negWidth 0 0 $text-border-shadow;
  & > div {
    width: 100%;
  }
}
</style>
