// https://nuxt.com/docs/api/configuration/nuxt-config

const components = {
  'dirs': [
    {
      'path': '~/components/layout',
      'global': true
    },
    {
      'path': '~/components/topics',
      'global': true
    }
  ]
};

const modules = [
  'nuxt-indexes-ts',
  'nuxt-reactive-form',
  '@pinia/nuxt',
  'nuxt-icon',
  '@nuxt/content'
]

export default defineNuxtConfig({

  modules,

  components,

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

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    }
  }

})
