export default defineNuxtConfig({
  extends: '..',
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      preload: ['ts'],
      theme: 'github-dark'
    }
  }
})
