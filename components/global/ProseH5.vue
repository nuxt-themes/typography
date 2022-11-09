<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h5?.icon !== false && prose.headings?.icon !== false)
const icon = computed(() => prose.h5?.icon || prose.headings?.icon)
</script>

<template>
  <h5 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <Icon v-if="hasIcon" :name="icon" />
    </NuxtLink>
  </h5>
</template>

<style scoped lang="ts">
css({
  h5: {
    display: 'block',
    margin: '{prose.h5.margin}',
    fontSize: '{prose.h5.fontSize}',
    lineHeight: '{prose.h5.lineHeight}',
    fontWeight: '{prose.h5.fontWeight}',
    ':deep(.icon)': {
      marginLeft: '{space.8}',
      display: 'inline-block',
      opacity: '0',
      transition: 'opacity 100ms',
      width: '{prose.h5.iconSize}',
      height: '{prose.h5.iconSize}',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  }
})
</style>
