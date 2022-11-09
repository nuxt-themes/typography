export default defineAppConfig({
  prose: {
    // Default heading
    headings: {
      icon: 'ph:link'
    }
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /**
     * Prose configuration from Nuxt Typography
     */
    prose?: {
      /**
       * Default configuration for all headings (h1, h2, h3, h4, h5 and h6)
       */
      headings?: {
        /**
         * Default icon for anchor link on hover
         */
        icon?: string
      }
      h1?: {
        icon?: string
      }
      h2?: {
        icon?: string
      }
      h3?: {
        icon?: string
      }
      h4?: {
        icon?: string
      }
      h5?: {
        icon?: string
      }
      h6?: {
        icon?: string
      }
    }
  }
}
