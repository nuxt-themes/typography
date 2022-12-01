
export default defineNuxtConfigSchema({
  appConfig: {
    /**
     * Prose configuration from Nuxt Typography
     */
    prose: {
      /**
       * Copy button (used in code blocks)
       */
      copyButton: {
        /** Icon displayed to copy */
        iconCopy: 'ph:copy',
        /** Icon displayed when copied */
        iconCopied: 'ph:check'
      },
      /**
       * Default configuration for all headings (h1, h2, h3, h4, h5 and h6)
       */
      headings: {
        /**
         * Default icon for anchor link on hover
         * @type {string|false}
         */
        icon: 'ph:link'
      },
      /**
       * First heading configuration
       */
      h1: {
        /**
         * Icon displayed for anchor link on hover
         * @type {string|false}
         * */
        icon: ''
      },
      /**
       * Second heading configuration
       */
      h2: {
        /**
         * Icon displayed for anchor link on hover
         * @type {string|false}
         * */
        icon: ''
      },
      /**
       * Third heading configuration
       */
      h3: {
        /**
         * Icon displayed for anchor link on hover
         * @type {string|false}
         * */
        icon: ''
      },
      /**
       * Fourth heading configuration
       */
      h4: {
        /**
         * Icon displayed for anchor link on hover
         * @type {string|false}
         * */
        icon: ''
      },
      /**
       * Fifth heading configuration
       */
      h5: {
        /**
         * Icon displayed for anchor link on hover
         * @type {string|false}
         * */
        icon: ''
      },
      /**
       * Sixth heading configuration
       */
      h6: {
        /**
         * Icon displayed for anchor link on hover
         * @type {string|false}
         * */
        icon: ''
      }
    }
  }
})
