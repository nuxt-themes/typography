<template>
  <p><slot /></p>
</template>

<style lang="ts" scoped>
css({
  p: {
    fontSize: '{typo.base.fontSize}',
    lineHeight: '{typo.base.lineHeight}',
    margin: "{prose.p.margin}",
    ":deep(br)": {
      display: "block",
      content: "''",
      margin: "{prose.p.br.margin}"
    }
  }
})
</style>
