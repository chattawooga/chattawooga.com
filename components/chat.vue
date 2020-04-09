<template>
    <v-card :href="chat.link" class="mx-auto mb-3" max-width="400" shaped>
        <v-img
            class="white--text align-end"
            height="150px"
            :srcset="require(`~/static/images/chats/${chat.key}/icon.png?webp&resize&sizes[]=200&sizes[]=400&sizes[]=800'`)"
        >
            <v-card-title>
                {{
                    chat.name
                }}
            </v-card-title>
        </v-img>
        <v-card-text>
            <v-card-subtitle>
                {{ chat.platform }}
                <a :href="chat.link" target="_blank">{{ chat.link }}</a>
            </v-card-subtitle>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "vue-property-decorator";
import { Chat } from "@/types";

@Component
export default class extends Vue {
    @Prop(Object) readonly chat!: Chat;
}
</script>

<style lang="scss">
$text-border-shadow: #000;
$negWidth: -2px;
$width: 2px;
.v-card__title {
    font-size: 1.8em;
    text-shadow: $negWidth $negWidth 0 $text-border-shadow,
        0 $negWidth 0 $text-border-shadow,
        $width $negWidth 0 $text-border-shadow, $width 0 0 $text-border-shadow,
        $width $width 0 $text-border-shadow, 0 $width 0 $text-border-shadow,
        $negWidth $width 0 $text-border-shadow,
        $negWidth 0 0 $text-border-shadow;
}
</style>
