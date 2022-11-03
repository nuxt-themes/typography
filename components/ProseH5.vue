<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h5 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
    <Icon :name="prose.icon" size="20px" />
  </h5>
</template>

<style scoped lang="ts">
css({
  h5: {
    display: 'block',
    margin: '{prose.h5.margin}',
    fontSize: '{prose.h5.fontSize}',
    lineHeight: '{prose.h5.lineHeight}',
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
