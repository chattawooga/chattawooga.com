<template>
    <v-container>
        <v-subheader class="display-1">
            Chats
        </v-subheader>
        <div v-for="chat in chats" :key="chat.key">
            <chat :chat="chat" />
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
