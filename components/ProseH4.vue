<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
</script>

<template>
  <h4 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
    <Icon :name="prose.icon" size="20px" />
  </h4>
</template>

<style scoped lang="ts">
css({
  h4: {
    display: 'block',
    margin: '{prose.h4.margin}',
    fontSize: '{prose.h4.fontSize}',
    lineHeight: '{prose.h4.lineHeight}',
    fontWeight: "{prose.h4.fontWeight}",
    letterSpacing: '{prose.h4.letterSpacing}',
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
