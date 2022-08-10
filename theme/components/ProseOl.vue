<template>
  <ol>
    <slot />
  </ol>
</template>

<style lang="postcss" scoped>
ol {
  list-style-type: v-bind($dt('prose.ol.list-style-type'));
  margin: v-bind($dt('prose.ol.margin'));
  padding: v-bind($dt('prose.ol.padding'));

  :deep(ul),
  :deep(ol) {
    margin: v-bind($dt('prose.ol.nested.margin'));
  }
}
</style>
