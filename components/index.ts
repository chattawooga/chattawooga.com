import Vue from "vue";
Vue.component("chat", () => import("./chat.vue"));
Vue.component("event", () => import("./event.vue"));
Vue.component("profile", () => import("./profile.vue"));