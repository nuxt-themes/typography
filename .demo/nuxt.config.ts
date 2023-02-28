export default defineNuxtConfig({
  typescript: { includeWorkspace: true },
  extends: '..',
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    'nuxt-plausible',
    '@nuxtjs/color-mode',
    '@nuxt/devtools'
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
  },
  colorMode: {
    classSuffix: '',
  }
})
