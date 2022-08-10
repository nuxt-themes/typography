import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'

const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path: string) => resolve(themeDir, path)

// @ts-ignore
export default defineNuxtConfig({
  modules: [
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module'
  ],
  components: [
    {
      path: resolveThemeDir('components'),
      prefix: '',
      global: true
    }
  ],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  // TODO: remove in RC7
  experimental: {
    viteNode: true
  }
})
