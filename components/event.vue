<template>
    <v-card class="mx-auto mb-3" max-width="400" shaped>
        <v-img
            v-if="event != null"
            class="white--text align-end"
            height="150px"
            :src="require(`~/static/images/${event.event.type}/${event.event.key}/icon.png`)"
        >
            <v-card-title>
                {{ event.event.name }}
                <br>
                {{
                    event.start | date
                }}
                {{ event.start | time }}
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
        <v-card-text v-if="event.cancelled || event.postponed" class="pb-0">
            <v-alert v-if="event.cancelled" class="mb-0" type="warning">
                Cancelled
            </v-alert>
            <v-alert v-if="event.postponed" class="mb-0" type="info">
                Postponed
            </v-alert>
        </v-card-text>
        <v-card-subtitle>{{ event.event.about }}</v-card-subtitle>
        <v-card-title class="pt-0" />
        <v-card-text>{{ event.event.address }}</v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "vue-property-decorator";
import moment from "moment-timezone";
import { Event, EventDetail } from "@/types";

@Component
export default class extends Vue {
    @Prop(Object) readonly event!: EventDetail;

    getUrl (key: string, value: string): string {
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
}
</script>

<style lang="scss" scoped>
$text-border-shadow: #000;
.v-card__title {
    text-shadow: -1px -1px 0 $text-border-shadow, 0 -1px 0 $text-border-shadow,
        1px -1px 0 $text-border-shadow, 1px 0 0 $text-border-shadow,
        1px 1px 0 $text-border-shadow, 0 1px 0 $text-border-shadow,
        -1px 1px 0 $text-border-shadow, -1px 0 0 $text-border-shadow;
}
</style>