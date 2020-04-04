<template>
    <v-container>
        <v-row>
            <v-col cols="3" />
            <v-col cols="6">
                <header class="offset-md-3 col-md-6 col-sm-12" />
            </v-col>
            <v-col cols="3" />
        </v-row>
        <v-row>
            <v-col cols="1" />
            <v-col>Welcome to Chattawooga, your resource for local Chattanooga furry resources!</v-col>
            <v-col cols="1" />
        </v-row>
        <v-row>
            <v-col cols="1" />
            <v-col>If you want to find out about artists, makers of all kinds (fursuits, ceramics, and so much more), online chats or events for furries in Chattanooga and the surrounding area, this is the place to look.</v-col>
            <v-col cols="1" />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

@Component
export default class extends Vue {}
</script>

<style lang="scss">
header {
    content: url("~static/images/logo.png");
}
</style>
