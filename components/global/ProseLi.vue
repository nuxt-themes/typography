<template>
  <li><slot /></li>
</template>

<style lang="ts" scoped>
css({
  li: {
    margin: '{prose.li.margin}',
    listStylePosition: '{prose.li.listStylePosition}',
  }
})
</style>
