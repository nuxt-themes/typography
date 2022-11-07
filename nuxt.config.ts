import { logger, createResolver } from '@nuxt/kit'
import { version } from './package.json'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    { path: resolve('./components'), global: true, prefix: '' }
  ],
  modules: ['nuxt-icon', '@nuxt-themes/tokens'],
  hooks: {
    'modules:before' () {
      logger.success(`Using Nuxt Typography v${version}`)
    }
  }
})
