<template>
    <v-card class="mx-auto mb-3" max-width="400" shaped>
        <v-img
            class="white--text align-end"
            height="150px"
            :src="require(`~/static/images/${profile.type}/${profile.key}/icon.png`)"
        >
            <v-card-title>
                {{
                    profile.name
                }}
            </v-card-title>
        </v-img>
        <v-card-text>
            <v-row>
                <v-col
                    v-for="(value, key) in profile.social"
                    :key="key"
                    align="center"
                    justify="center"
                >
                    <v-btn large :href="getUrl(key, value)" target="_blank">
                        <v-icon>icon-{{ key }}</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "vue-property-decorator";
import { Profile, SocialMedia } from "@/types";

@Component
export default class extends Vue {
    @Prop(Object) readonly profile!: Profile;

    getUrl (key: string, value: string): string {
        switch (key) {
            case "discord":
                return `${value}`;
            case "etsy":
                return `https://etsy.com/shop/${value}`;
            case "facebook":
                return `https://facebook.com/${value}`;
            case "furaffinity":
                return `https://furaffinity.net/user/${value}`;
            case "ko-fi":
                return `https://ko-fi.com/${value}`;
            case "telegram":
                return `https://telegram.me/${value}`;
            case "twitter":
                return `https://twitter.com/${value}`;
            case "website":
                return `${value}`;
            case "youtube":
                return `https://youtube.com/${value}`;
        }

        return "";
    }
}
</script>

<style lang="scss">
$text-border-shadow: #000;
.v-card__title {
    text-shadow: -1px -1px 0 $text-border-shadow, 0 -1px 0 $text-border-shadow,
        1px -1px 0 $text-border-shadow, 1px 0 0 $text-border-shadow,
        1px 1px 0 $text-border-shadow, 0 1px 0 $text-border-shadow,
        -1px 1px 0 $text-border-shadow, -1px 0 0 $text-border-shadow;
}
</style>
