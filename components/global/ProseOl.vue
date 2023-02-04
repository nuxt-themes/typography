<template>
  <ol>
    <slot />
  </ol>
</template>

<style lang="ts" scoped>
css({
  ol: {
    fontFamily: '{typography.font.body}',
    listStyleType: '{prose.ol.listStyleType}',
    padding: '{prose.ol.padding}',
    margin: '{prose.ol.margin}',
    "& > :deep(li)": {
      "&::marker": {
        color: '{prose.ol.li.markerColor}',
      },
      'ul, ol': {
        margin: 0
      }
    }
  }
})
</style>
