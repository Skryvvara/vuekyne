export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Darkyne',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./assets/sass/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', },
      { code: 'de', iso: 'de-DE', file: 'de.json', },
    ],
    detectBrowserLanguage: { alwaysRedirect: false, fallbackLocale: 'en', redirectOn: 'root', useCookie: true, cookieCrossOrigin: false, cookieDomain: null, cookieKey: 'language', cookieSecure: true },
    defaultLocale: 'en',
    langDir: '~/locales/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
