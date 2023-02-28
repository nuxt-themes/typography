import { createResolver } from '@nuxt/kit'

const envModules = {
  tokens: process?.env?.THEME_DEV_TOKENS_PATH || 'pinceau/nuxt'
}

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [resolve('./main.css')],
  modules: [
    envModules.tokens,
    'nuxt-icon',
    'nuxt-config-schema'
  ]
})
