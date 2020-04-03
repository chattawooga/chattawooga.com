<template>
    <v-container>
        <v-subheader class="display-1">
            Makers
        </v-subheader>
        <v-row align="center" justify="center">
            <v-col v-for="maker in makers" :key="maker.key" lg="4" md="6" cols="12">
                <profile :profile="maker" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Maker } from "@/types";
import { loadData } from "@/util/loader.ts";

@Component
export default class extends Vue {
    makers: Maker[] = [];
    async asyncData () {
        return {
            makers: await loadData<Maker[]>(
                require.context("~/data/makers", false, /\.yml$/),
                "makers"
            )
        };
    }
}
</script>

<style lang="scss">
</style>
