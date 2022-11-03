<template>
  <strong>
    <slot />
  </strong>
</template>

<style lang="ts" scoped>
css({
  strong: {
    fontWeight: '{prose.strong.fontWeight}'
  }
})
</style>
