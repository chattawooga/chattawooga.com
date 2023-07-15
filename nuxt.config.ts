
export default defineNuxtConfig({
  css: [
    "typeface-roboto/index.css",
    "assets/fonts/icomoon/style.scss",
    "vuetify/lib/styles/main.sass"
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    "@nuxt/content"
  ],
  content: {},
  typescript: {
    shim: false,
    typeCheck: false
  }
});
