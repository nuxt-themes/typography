import { logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using Nuxt Typography v${version}`)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxt-themes/tokens']
})
