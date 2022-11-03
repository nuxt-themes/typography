<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h3 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
    <Icon :name="prose.icon" size="20px" />
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
