import { createResolver, logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using Nuxt Typography v${version}`)

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [resolve('./main.css')],
  modules: [
    '@nuxt-themes/tokens',
    'nuxt-icon'
  ]
})
