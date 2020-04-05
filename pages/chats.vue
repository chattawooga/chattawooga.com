<template>
    <v-container>
        <v-banner elevation="12">
            Here we have a collection of all open Chattanooga furry chats.
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
    async asyncData () {
        return {
            chats: await loadData<Chat[]>(
                require.context("~/data/chats", false, /\.yml$/),
                "chats"
            )
        };
    }
}
</script>

<style lang="scss">
</style>
