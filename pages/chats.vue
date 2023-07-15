<template>
  <v-container>
    <v-banner elevation="12">
      Here we have a collection of all open Chattanooga furry chats.
      <br />Got a chat to add?
      <nuxt-link to="/contactus"> Contact us </nuxt-link>
    </v-banner>
    <v-row align="center" justify="center">
      <v-col v-for="chat in chats" :key="chat.name" lg="4" md="6" cols="12">
        <group-chat :chat="chat" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Chat } from "@/types";
import GroupChat from "@/components/chat.vue";

const chats = await queryContent<Chat>("chats").find();
</script>

<style lang="scss">
</style>
