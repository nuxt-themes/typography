export default defineNuxtConfig({
  extends: '..',
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    'nuxt-plausible'
  ],
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
