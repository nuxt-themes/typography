<template>
  <p><slot /></p>
</template>

<style lang="postcss" scoped>
p {
  margin: v-bind($dt('prose.p.margin'));
  line-height: v-bind($dt('prose.p.line-height'));

  :deep(br) {
    display: block;
    content: '';

    margin: v-bind($dt('prose.p.br.margin'));
  }
}
</style>
