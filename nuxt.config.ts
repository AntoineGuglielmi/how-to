// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-indexes-ts',
    'nuxt-reactive-form',
    '@pinia/nuxt',
    'nuxt-icon'
  ],
  components: {
    'dirs': [
      {
        'path': '~/components/layout',
        'global': true
      },
      {
        'path': '~/components/howto',
        'global': true
      },
      {
        'path': '~/components/topics',
        'global': true
      },
      // "~/components"
    ]
  },
  indexes: {
    from: [{
      dirs: ['./store', './data', './composables']
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
