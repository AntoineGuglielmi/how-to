// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-indexes-ts',
    'nuxt-reactive-form',
    '@pinia/nuxt'
  ],
  components: {
    "dirs": [
      {
        "path": "~/components/layout",
        "global": true
      },
      {
        "path": "~/components/howto",
        "global": true
      },
      // "~/components"
    ]
  },
  indexes: {
    from: [{
      dirs: ['./store']
    }]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
})
