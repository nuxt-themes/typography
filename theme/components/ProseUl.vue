<template>
  <ul>
    <slot />
  </ul>
</template>

<style lang="postcss" scoped>
ul {
  list-style-type: v-bind($dt('prose.ul.list-style-type'));
  margin: v-bind($dt('prose.ul.margin'));
  padding: v-bind($dt('prose.ul.padding'));

  :deep(ul),
  :deep(ol) {
    margin: v-bind($dt('prose.ul.nested.margin'));
  }
}
</style>
