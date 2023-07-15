<template>
  <v-container>
    <v-banner elevation="12">
      Looking for Chattanooga furry makers to commission a new fursuit? What
      about some paws? A furry-themed mug? We have all sorts of makers in
      Chattanooga, check them out!
      <br />Want to get added?
      <nuxt-link to="/contactus"> Contact us </nuxt-link>
    </v-banner>
    <v-row align="center" justify="center">
      <v-col v-for="maker in makers" :key="maker.key" lg="4" md="6" cols="12">
        <profile :profile="maker" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Maker } from "@/types";

const makers = await queryContent<Maker>("makers").find();
</script>

<style lang="scss">
</style>
