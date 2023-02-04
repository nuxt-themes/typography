<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="ts" scoped>
css({
  blockquote: {
    fontFamily: '{typography.font.body}',
    margin: '{prose.blockquote.margin}',
    padding: '{prose.blockquote.padding}',
    quotes: '{prose.blockquote.quotes}',
    color: '{prose.blockquote.color}',
    borderLeftWidth: '{prose.blockquote.border.width}',
    borderLeftStyle: '{prose.blockquote.border.style}',
    borderLeftColor: '{prose.blockquote.border.color}',
    "p:first-of-type::before": { content: "''" },
    "p:last-of-type::after": { content: "''" }
  },
})
</style>
