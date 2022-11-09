<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h2 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <Icon :name="prose.h2?.icon || prose.headings?.icon" />
    </NuxtLink>
  </h2>
</template>

<style scoped lang="ts">
css({
  h2: {
    display: 'block',
    margin: '{prose.h2.margin}',
    fontSize: '{prose.h2.fontSize}',
    lineHeight: '{prose.h2.lineHeight}',
    fontWeight: "{prose.h2.fontWeight}",
    letterSpacing: '{prose.h2.letterSpacing}',
    ':deep(.icon)': {
      marginLeft: '{space.12}',
      display: 'inline-block',
      opacity: '0',
      transition: 'opacity 100ms',
      width: '{prose.h2.iconSize}',
      height: '{prose.h2.iconSize}',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  }
})
</style>
