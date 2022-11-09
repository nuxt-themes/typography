<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h6 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
    <Icon :name="prose.icon" size="20px" />
  </h6>
</template>

<style scoped lang="ts">
css({
  h6: {
    display: 'block',
    margin: '{prose.h6.margin}',
    fontSize: '{prose.h6.fontSize}',
    lineHeight: '{prose.h6.lineHeight}',
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
  }
})
</style>
