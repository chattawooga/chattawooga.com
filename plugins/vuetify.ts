// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        /*
        defaultAssets: false,
        options: {
            customProperties: true
        },
        */
        theme: {
            defaultTheme: "dark",
            themes: {
                dark: {
                    colors: {
                        background: '#51444d',
                        primary: '#edeced',
                        warning: '#ca7100'
                    },
                }
            },
        }
    })

    nuxtApp.vueApp.use(vuetify)
})