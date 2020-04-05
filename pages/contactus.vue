<template>
    <v-container>
        <v-form
            name="contact-us"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact-us">
            <v-text-field name="name" label="Name" />
            <v-col>
                Leave us a way to contact you, pick any one of these
                <v-text-field name="discord" label="Discord" />
                <v-text-field name="email" label="E-mail" />
                <v-text-field name="twitter" label="Twitter" />
                <v-text-field name="telegram" label="Telegram" />
            </v-col>
            <v-textarea name="comment" label="Comment" />
            <v-btn class="mr-4" @click="submit">
                Submit
            </v-btn>
        </v-form>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

@Component
export default class extends Vue {}
</script>

<style lang="scss">
</style>
