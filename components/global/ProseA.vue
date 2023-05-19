<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>

<template>
  <NuxtLink :to="href" :target="target" class="prose-a">
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
      color: '{prose.a.color.hover}',
      borderColor: '{prose.a.border.color.hover}',
      borderStyle: '{prose.a.border.style.hover}',
    },
    '&:has(img)': {
      borderWidth: '0'
    },
    '&:has(code)': {
      borderBottom: '{prose.a.hasCode.borderBottom}',
      '&:hover': {
        borderBottom: '{prose.a.hasCode.borderBottom}',
      },
    },
  },
})
</style>
