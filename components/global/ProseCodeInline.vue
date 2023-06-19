<template>
  <code class="prose-code-inline">
    <slot />
  </code>
</template>

<style lang="ts" scoped>
css({
  code: {
    fontFamily: '{typography.font.code}',
    borderRadius: '{prose.code.inline.borderRadius}',
    padding: '{prose.code.inline.padding}',
    mx: '1px',
    fontSize: '{prose.code.inline.fontSize}',
    fontWeight: '{prose.code.inline.fontWeight}',
    color: '{prose.code.inline.color}',
    backgroundColor: '{prose.code.inline.backgroundColor}',
  },
  "tbody code": {
    fontSize: '{prose.tbody.code.inline.fontSize}'
  },
  'h1, h2, h3, h4, h5, h6': {
    'a code': {
      color: '{prose.code.inline.color}',
      fontSize: "0.777777em",
      borderRadius: "{prose.code.inline.borderRadius}",
      padding: "0.15em 0.5em",
    }
  },
  'a code': {
    color: '{prose.a.code.color.static}',
    borderWidth: '{prose.a.code.border.width}',
    borderStyle: '{prose.a.code.border.style}',
    borderColor: '{prose.a.code.border.color.static}',
  },
  'a:hover code': {
    color: '{prose.a.code.color.hover}',
    borderColor: '{prose.a.code.border.color.hover}',
    backgroundColor: '{prose.a.code.background.hover}',
  },
})
</style>
