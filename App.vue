<template>
  <v-app>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <v-bottom-navigation class="footer" app>
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
    </NuxtLayout>
  </v-app>
</template>

<script lang="ts" setup>
const route = useRoute();
useHead({
  title: "Chattawooga.com - Your place for Chattanooga Furries",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: process.env.npm_package_description || "",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "canonical",
      href: `https://chattawooga.com${route.path}`,
    },
  ],
});
</script>

<style lang="scss">
.v-application {
  background-color: var(--v-background-base) !important;
  a {
    //color: #fff !important;
  }
}
.v-application__wrap > .v-container {
  margin-bottom: 100px;
}
</style>

<style lang="scss" scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: inherit;
}
</style>
