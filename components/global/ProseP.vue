<template>
  <p><slot /></p>
</template>

<style lang="ts" scoped>
css({
  p: {
    fontSize: '{typography.base.fontSize}',
    lineHeight: '{typography.base.lineHeight}',
    margin: '{prose.p.margin}',
    ':deep(br)': {
      display: "block",
      content: "''",
      margin: '{prose.p.br.margin}'
    }
  }
})
</style>
