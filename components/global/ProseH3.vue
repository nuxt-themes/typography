<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h3 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <Icon :name="prose.h3?.icon || prose.headings?.icon" />
    </NuxtLink>
  </h3>
</template>

<style scoped lang="ts">
css({
  h3: {
    display: 'block',
    margin: '{prose.h3.margin}',
    fontSize: '{prose.h3.fontSize}',
    lineHeight: '{prose.h3.lineHeight}',
    fontWeight: "{prose.h3.fontWeight}",
    letterSpacing: '{prose.h3.letterSpacing}',
    ':deep(.icon)': {
      marginLeft: '{space.12}',
      display: 'inline-block',
      opacity: '0',
      transition: 'opacity 100ms',
      width: '{prose.h3.iconSize}',
      height: '{prose.h3.iconSize}',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  }
})
</style>
