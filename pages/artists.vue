<template>
    <v-container>
        <v-subheader class="display-1">
            Artists
        </v-subheader>
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
