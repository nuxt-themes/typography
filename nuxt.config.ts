import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    { path: resolve('./components'), global: true, prefix: '' }
  ],
  modules: ['nuxt-icon', '@nuxt-themes/tokens']
})
