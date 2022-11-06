export default defineNuxtConfig({
  extends: '..',
  modules: ['@nuxt/content', '@nuxthq/studio'],
  content: {
    highlight: {
      preload: ['ts'],
      theme: 'github-dark'
    }
  }
})
