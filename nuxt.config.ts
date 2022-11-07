import { logger, createResolver } from '@nuxt/kit'
import { version } from './package.json'

const { resolve } = createResolver(import.meta.url)
logger.success(`Using Nuxt Typography v${version}`)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    { path: resolve('./components'), global: true, prefix: '' }
  ],
  modules: ['nuxt-icon', '@nuxt-themes/tokens']
})
