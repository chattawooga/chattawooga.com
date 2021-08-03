module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended"
  ],
  rules: {
    "quotes": [2, "double"],
    "semi": [2, "always"],
    "indent": [0],
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "vue/script-indent": [2, 4, {
      switchCase: 1
    }],
    "vue/html-indent": [2, 4],
    'vue/no-v-html': 0,
  }
}
