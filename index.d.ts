import { $dt } from '@nuxtjs/design-tokens'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dt: typeof $dt
  }
}

export { }
