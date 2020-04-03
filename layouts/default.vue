<template>
    <v-app>
        <nuxt />
        <v-bottom-navigation app>
            <v-btn to="/">
                <span>Home</span>
                <v-icon>icon-home</v-icon>
            </v-btn>
            <v-btn to="/artists">
                <span>Artists</span>
                <v-icon>icon-art</v-icon>
            </v-btn>
            <v-btn to="/makers">
                <span>Makers</span>
                <v-icon>icon-shirt</v-icon>
            </v-btn>
            <v-btn to="/chats">
                <span>Chats</span>
                <v-icon>icon-bubble-lines</v-icon>
            </v-btn>
            <v-btn to="/events">
                <span>Events</span>
                <v-icon>icon-calendar</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<style lang="scss" scoped>
.v-application {
    background-color: var(--v-background-base) !important;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: inherit;
}
</style>
