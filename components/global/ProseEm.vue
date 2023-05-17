<template>
  <em class="prose-em">
    <slot />
  </em>
</template>

<style lang="ts" scoped>
css({
  em: {
    fontFamily: '{typography.font.body}',
    fontStyle: 'italic'
  }
})
</style>
