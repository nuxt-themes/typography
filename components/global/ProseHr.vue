<template>
  <hr>
</template>

<style lang="ts" scoped>
css({
  hr: {
    margin: '{prose.hr.margin}',
    borderTopStyle: '{prose.hr.style}',
    borderTopWidth: '{prose.hr.width}',
    borderTopColor: '{prose.hr.color.light}',
    "@dark": {
      borderTopColor: '{prose.hr.color.dark}'
    }
  }
})
</style>
