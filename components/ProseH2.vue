<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h2 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
    <Icon :name="prose.icon" size="20px" />
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
    a: {
      marginRight: '{space.12}',
    },
    ':deep(.icon)': {
      position: 'absolute',
      display: 'inline-block',
      opacity: '0',
      transition: 'all 100ms',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  }
})
</style>
