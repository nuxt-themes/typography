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
    fontFamily: '{typography.font.body}',
    fontWeight: '{prose.a.fontWeight}',
    textDecoration: '{prose.a.textDecoration}',
    borderBottomWidth: '{prose.a.border.width}',
    borderBottomStyle: '{prose.a.border.style.static}',
    borderBottomColor: '{prose.a.border.color.static}',
    paddingBottom: '{prose.a.border.distance}',
    color: '{prose.a.color.static}',
    '&:hover': {
      color: '{prose.a.color.light.hover}',
      borderColor: '{prose.a.borderColor.light.hover}',
      borderStyle: '{prose.a.borderStyle.hover}',
    },
    '&:has(img)': {
      borderWidth: '0'
    },
    '&:has(code)': {
      borderBottom: '{prose.a.hasCode.borderBottom} !important',
      '&:hover': {
        ':deep(code)': {
          color: '{prose.a.code.color.light.hover}',
            borderColor: '{prose.a.code.borderColor.light.hover}',
            backgroundColor: '{prose.a.code.background.light.hover}',
        },
      },
      ':deep(code)': {
        border: '{prose.a.code.border}',
      }
    },
    '@dark': {
      color: '{prose.a.color.dark.default}',
      borderColor: '{prose.a.borderColor.dark.default}',
      '&:hover': {
        color: '{prose.a.color.dark.hover}',
        borderColor: '{prose.a.borderColor.dark.hover}',
      },
      '&:has(code)': {
        ':deep(code)': {
          borderColor: '{prose.a.code.borderColor.dark.default}',
        },
        '&:hover': {
          ':deep(code)': {
            color: '{prose.a.code.color.dark.hover}',
              borderColor: '{prose.a.code.borderColor.dark.hover}',
              backgroundColor: '{prose.a.code.background.dark.hover}'
          }
        }
      }
    },
  },
})
</style>
