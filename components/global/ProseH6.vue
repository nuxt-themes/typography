<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h6?.icon !== false && prose.headings?.icon !== false)
const icon = computed(() => prose.h6?.icon || prose.headings?.icon)
</script>

<template>
  <h6 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <Icon v-if="hasIcon" :name="icon" />
    </NuxtLink>
  </h6>
</template>

<style scoped lang="ts">
css({
  h6: {
    display: 'block',
    margin: '{prose.h6.margin}',
    fontSize: '{prose.h6.fontSize}',
    lineHeight: '{prose.h6.lineHeight}',
    fontWeight: "{prose.h6.fontWeight}",
    ':deep(.icon)': {
      marginLeft: '{space.8}',
      display: 'inline-block',
      opacity: '0',
      transition: 'opacity 100ms',
      width: '{prose.h6.iconSize}',
      height: '{prose.h6.iconSize}',
    },
    '&:hover': {
      ':deep(.icon)': {
        opacity: '1'
      }
    },
  }
})
</style>
