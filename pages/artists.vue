<template>
  <v-container>
    <v-banner elevation="12">
      Looking for Chattanooga furry artists to commission or organize an art-jam
      with? Check out this list.
      <br />Want to get added?
      <nuxt-link to="/contactus"> Contact us </nuxt-link>
    </v-banner>
    <v-row align="center" justify="center">
      <v-col v-for="artist in artists" :key="artist.key" lg="4" md="6" col="12">
        <profile :profile="artist" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Artist } from "@/types";
import { loadData } from "@/util/loader";
const artists = await queryContent<Artist>("artists").find();
console.log(artists);
</script>

<style lang="scss">
</style>
