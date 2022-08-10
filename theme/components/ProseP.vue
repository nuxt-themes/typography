<template>
  <p><slot /></p>
</template>

<style lang="postcss" scoped>
p {
  margin: v-bind($dt('prose.p.margin'));
  line-height: v-bind($dt('prose.p.line-height'));

  :deep(br) {
    @apply block;
    margin: v-bind($dt('prose.p.br.margin'));
    content: '';
  }
}
</style>
