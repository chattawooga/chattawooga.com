
export default {
  mode: 'universal',
  head: {
    title: 'Chattawooga.com - Your place for Chattanooga Furries',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    { src: "~assets/fonts/icomoon/style.scss" }
  ],
  plugins: [
    "components"
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/google-analytics'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  axios: {
  },
  googleAnalytics: {
    id: 'G-1VZJQNKNNC'
  },
  optimizedImages: {
    optimizeImages: true
  },
  sitemap: {
    hostname: "https://chattawooga.com"
  },
  server: {
    host: '0.0.0.0'
  },
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          background: '#51444d'
        }
      },
      options: {
        customProperties: true
      },
    }
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: { fix: true }
        })
      }
    }
  }
}