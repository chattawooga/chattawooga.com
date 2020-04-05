<template>
    <v-container>
        <v-banner elevation="12">
            Looking for Chattanooga furry artists to commission or organize an art-jam with? Check out this list.
            <br>Want to get added?
            <nuxt-link to="/contactus">
                Contact us
            </nuxt-link>
        </v-banner>
        <v-row align="center" justify="center">
            <v-col v-for="artist in artists" :key="artist.key" lg="4" md="6" col="12">
                <profile :profile="artist" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Artist } from "@/types";
import { loadData } from "@/util/loader.ts";

@Component
export default class extends Vue {
    artists: Artist[] = [];
    async asyncData () {
        return {
            artists: await loadData<Artist[]>(
                require.context("~/data/artists", false, /\.yml$/),
                "artists"
            )
        };
    }
}
</script>

<style lang="scss">
</style>
