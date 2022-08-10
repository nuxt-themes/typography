import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // TODO: replace with app.config when ready
  // https://github.com/nuxt/framework/pull/6333
  theme: {
    meta: {
      name: 'Theme Starter',
      description: 'The best place to start your Nuxt Theme.',
      author: 'NuxtLabs'
    }
  },
  modules: [
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module',
    '@nuxt/content'
  ],
  content: {
    documentDriven: true
  },
  // TODO: remove in RC7
  experimental: {
    viteNode: true
  }
})
