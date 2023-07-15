<template>
  <v-card :href="chat.link" class="mx-auto mb-3" max-width="400" shaped>
    <v-img
      class="white--text align-end"
      height="150px"
      :src="`/images/chats/${chatKey}/icon.png`"
    >
      <v-card-title>
        {{ chat.name }}
      </v-card-title>
    </v-img>
    <v-card-text>
      <v-card-subtitle>
        {{ chat.platform }}
        <a v-if="chat.link" :href="chat.link" target="_blank">{{
          chat.link
        }}</a>
        <p v-else>
          Get an invite at the
          <a href="https://t.me/chattawooga" target="_blank">
            the chattawooga site chat
          </a>
        </p>
      </v-card-subtitle>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import Vue from "vue";
import { Chat } from "@/types";

const props = defineProps<{
  chat: Chat;
}>();
const chatKey = computed(() =>
  props.chat._id.split(":")[2].replace(".yml", "")
);
</script>

<style lang="scss">
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
}
</style>
