export default defineNuxtConfig({
  extends: '..',
  modules: ['@nuxt/content', '@nuxthq/studio'],
  content: {
    documentDriven: true,
    highlight: {
      preload: ['ts'],
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  },
  generate: {
    routes: ['/tailwind']
  }
})
