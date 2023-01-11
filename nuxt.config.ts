// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'indexes-ts',
    'nuxt-reactive-form'
  ],
  components: {
    "dirs": [
      {
        "path": "~/components/layout",
        "global": true
      },
      "~/components"
    ]
  },
  indexes: {
    from: []
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
})
