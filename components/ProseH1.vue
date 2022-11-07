<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h1 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
    <Icon :name="prose.icon" size="20px" />
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
    a: {
      marginRight: '{space.12}',
    },
    ':deep(.icon)': {
      display: 'inline-block',
      opacity: '0',
      transition: 'opacity 100ms',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  },
})
</style>
