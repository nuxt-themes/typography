<template>
  <ul>
    <slot />
  </ul>
</template>

<style lang="ts" scoped>
css({
  ul: {
    listStyleType: '{prose.ul.listStyleType}',
    padding: '{prose.ul.padding}',
    margin: '{prose.ul.margin}',
    "& > :deep(li)": {
      "&::marker": {
        color: '{prose.ul.li.markerColor.light}',
        "@dark": {
          color: '{prose.ul.li.markerColor.dark}'
        }
      },
      'ul, ol': {
        margin: 0
      }
    }
  }
})
</style>
