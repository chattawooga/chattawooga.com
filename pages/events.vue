<template>
    <v-container>
        <v-subheader class="display-1">
            Events
        </v-subheader>
        <v-alert
            type="warning"
        >
            Due to the COVID-19 situation events may be postponed/cancelled, stay tuned for updates.
        </v-alert>
        <div v-for="event in events" :key="event.key">
            {{ event }}
        </div>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Chat } from "@/types";
import { loadData } from "@/util/loader.ts";

@Component
export default class extends Vue {
    events: Event[] = [];
    async asyncData () {
        return {
            chats: await loadData<Event[]>(
                require.context("~/data/events", false, /\.yml$/),
                "events"
            )
        };
    }
}
</script>

<style lang="scss">
</style>
