export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Juliane & Lennon - Convite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Juliane & Lennon - Convite' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'Juliane & Lennon' },
      { name: 'og:type', content: 'website' },
      { name: 'og:description', content: 'Convite do almoço do casamento do cívil' },
      { name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/tempero-bahiano.appspot.com/o/convite.jpeg?alt=media&token=616c1add-6a97-47fa-8b4f-f3ea8e375c77' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@/assets/css/styles.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    download: true,
    families: {
      'Great+Vibes': true,
      'Roboto': true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-BR',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
