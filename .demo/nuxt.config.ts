export default defineNuxtConfig({
  extends: '..',
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
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
