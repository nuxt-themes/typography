<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h4 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <Icon :name="prose.h4?.icon || prose.headings?.icon" />
    </NuxtLink>
  </h4>
</template>

<style scoped lang="ts">
css({
  h4: {
    display: 'block',
    margin: '{prose.h4.margin}',
    fontSize: '{prose.h4.fontSize}',
    lineHeight: '{prose.h4.lineHeight}',
    fontWeight: '{prose.h4.fontWeight}',
    letterSpacing: '{prose.h4.letterSpacing}',
    ':deep(.icon)': {
      marginLeft: '{space.10}',
      display: 'inline-block',
      opacity: '0',
      transition: 'opacity 100ms',
      width: '{prose.h4.iconSize}',
      height: '{prose.h4.iconSize}',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  }
})
</style>
