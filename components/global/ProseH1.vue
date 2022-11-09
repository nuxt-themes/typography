<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h1 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <Icon :name="prose.h1?.icon || prose.headings?.icon" />
    </NuxtLink>
  </h1>
</template>

<style scoped lang="ts">
css({
  h1: {
    display: 'block',
    margin: '{prose.h1.margin}',
    fontSize: '{prose.h1.fontSize}',
    lineHeight: '{prose.h1.lineHeight}',
    fontWeight: "{prose.h1.fontWeight}",
    letterSpacing: '{prose.h1.letterSpacing}',
    ':deep(.icon)': {
      marginLeft: '{space.12}',
      display: 'inline-block',
      opacity: '0',
      transition: 'opacity 100ms',
      width: '{prose.h1.iconSize}',
      height: '{prose.h1.iconSize}',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  },
})
</style>
