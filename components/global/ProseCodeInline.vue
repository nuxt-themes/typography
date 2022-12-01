<template>
  <code>
    <slot />
  </code>
</template>

<style lang="ts" scoped>
css({
  code: {
    borderRadius: '{prose.code.inline.borderRadius}',
    padding: '{prose.code.inline.padding}',
    fontSize: '{prose.code.inline.fontSize}',
    fontWeight: '{prose.code.inline.fontWeight}',
    color: '{prose.code.inline.color.light}',
    backgroundColor: '{prose.code.inline.backgroundColor.light}',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    "@dark": {
      color: '{prose.code.inline.color.dark}',
      backgroundColor: '{prose.code.inline.backgroundColor.dark}'
    }
  },
  "tbody code": {
    fontSize: '{prose.tbody.code.inline.fontSize}'
  },
  'h1, h2, h3, h4, h5, h6': {
    'a code': {
      color: "inherit",
      fontSize: "0.777777em",
      backgroundColor: '{color.gray.100}',
      borderRadius: "0.333333em",
      padding: "0.15em 0.5em",
      "@dark": {
        color: '{color.gray.200}',
        backgroundColor: '{color.gray.800}'
      }
    }
  }
})
</style>
