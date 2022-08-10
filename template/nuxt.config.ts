import { defineNuxtConfig } from 'nuxt'

// @ts-ignore
export default defineNuxtConfig({
  extends: 'my-nuxt-theme',
  modules: ['@nuxt/content'],
  // Same as Tailwind CSS reset
  css: ['modern-normalize/modern-normalize.css'],
  components: [
    {
      path: './components',
      prefix: '',
      global: true
    }
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    }
  }
})
