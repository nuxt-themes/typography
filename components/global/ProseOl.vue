<template>
  <ol>
    <slot />
  </ol>
</template>

<style lang="ts" scoped>
css({
  ol: {
    listStyleType: '{prose.ol.listStyleType}',
    padding: '{prose.ol.padding}',
    margin: '{prose.ol.margin}',
    "& > :deep(li)": {
      "&::marker": {
        color: '{prose.ol.li.markerColor.light}',
        "@dark": {
          color: '{prose.ol.li.markerColor.dark}'
        }
      },
      'ul, ol': {
        margin: 0
      }
    }
  }
})
</style>
