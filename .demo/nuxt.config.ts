export default defineNuxtConfig({
  extends: '..',

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swaps'
        }
      ]
    }
  },

  modules: ['@nuxt/content', '@nuxthq/studio', 'nuxt-plausible'],

  content: {
    documentDriven: true,
    highlight: {
      preload: ['vue', 'ts'],
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  }
})
