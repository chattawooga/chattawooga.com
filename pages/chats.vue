<template>
    <v-container>
        <v-banner elevation="12">
            {{ title }}
            <br>Got a chat to add?
            <nuxt-link to="/contactus">
                Contact us
            </nuxt-link>
        </v-banner>
        <v-row align="center" justify="center">
            <v-col v-for="chat in chats" :key="chat.key" lg="4" md="6" cols="12">
                <chat :chat="chat" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Chat } from "@/types";
import { loadData } from "@/util/loader.ts";

@Component
export default class extends Vue {
    chats: Chat[] = [];
    title = "Here we have a collection of all open Chattanooga furry chats.";
    asyncData () {
        return {
            chats: loadData<Chat[]>(
                require.context("~/data/chats", false, /\.yml$/),
                "chats"
            )
        };
    }

    head () {
        return {
            title: this.title
        };
    }
}
</script>

<style lang="scss">
</style>
