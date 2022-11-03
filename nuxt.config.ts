import { fileURLToPath } from 'url'
import { resolve } from 'pathe'

const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path: string) => resolve(themeDir, path)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    { path: resolveThemeDir('components'), global: true, prefix: '' }
  ],

  modules: ['nuxt-icon', '@nuxt-themes/tokens', '@nuxt/content'],

  content: {
    highlight: {
      preload: ['ts'],
      theme: 'github-dark'
    }
  }
})
