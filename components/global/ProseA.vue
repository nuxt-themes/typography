<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  },
  /**
   * `true` if `href` points to a static file
   */
  static: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NuxtLink :to="href" :blank="blank" :static="static">
    <slot />
  </NuxtLink>
</template>

<style lang="ts" scoped>
css({
  a: {
    fontWeight: '{prose.a.fontWeight}',
    textDecoration: '{prose.a.textDecoration}',
    borderBottom: '{prose.a.borderBottom}',
    borderStyle: '{prose.a.borderStyle.default}',
    paddingBottom: '{prose.a.borderDistance}',
    color: '{prose.a.color.light.default}',
    '&:hover': {
      color: '{prose.a.color.light.hover}',
      borderColor: '{prose.a.borderColor.light.hover}',
      borderStyle: '{prose.a.borderStyle.hover}',
    },
    '@dark': {
      color: '{prose.a.color.dark.default}',
      borderColor: '{prose.a.borderColor.dark.default}',
      '&:hover': {
        color: '{prose.a.color.dark.hover}',
        borderColor: '{prose.a.borderColor.dark.hover}',
      }
    },
    '&:has(img)': {
      borderWidth: '0'
    },
    '&:has(code)': {
      borderBottom: '{prose.a.hasCode.borderBottom}',
      ':deep(code)': {
        border: '{prose.a.code.border}',
        '&:hover': {
          color: '{prose.a.code.color.light.hover}',
          borderColor: '{prose.a.code.borderColor.light.hover}',
          background: '{prose.a.code.background.light.hover}',
        },
        '@dark': {
          borderColor: '{prose.a.code.borderColor.dark.default}',
          '&:hover': {
            color: '{prose.a.code.color.dark.hover}',
            borderColor: '{prose.a.code.borderColor.dark.hover}',
            background: '{prose.a.code.background.dark.hover}'
          }
        }
      }
    }
  },
})
</style>
