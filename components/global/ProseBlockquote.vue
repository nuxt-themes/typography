<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="ts" scoped>
css({
  blockquote: {
    margin: '{prose.blockquote.margin}',
    padding: '{prose.blockquote.padding}',
    quotes: '{prose.blockquote.quotes}',
    color: '{prose.blockquote.color.light}',
    borderLeft: '{prose.blockquote.borderLeft}',
    "@dark": {
      color: '{prose.blockquote.color.dark}',
      borderColor: '{prose.blockquote.borderColor.dark}',
    },
    "p:first-of-type::before": { content: "''" },
    "p:last-of-type::after": { content: "''" }
  },
})
</style>
