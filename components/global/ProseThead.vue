<template>
  <thead>
    <slot />
  </thead>
</template>

<style lang="ts" scoped>
css({
  thead: {
    fontFamily: '{typography.font.display}',
    border: '{prose.thead.border}',
    borderBottom: '{prose.thead.borderBottom}',
    '@dark': {
      borderColor: '{prose.thead.borderColor.dark}'
    }
  }
})
</style>
