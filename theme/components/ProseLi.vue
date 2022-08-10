<template>
  <li><slot /></li>
</template>

<style lang="postcss" scoped>
li {
  margin: v-bind($dt('prose.li.margin'));
  padding: v-bind($dt('prose.li.padding'));
}

ul > li {
  &::marker {
    color: v-bind($dt('prose.li.ul.color'));
  }
}

ol > li {
  &::marker {
    color: v-bind($dt('prose.li.ol.color'));
  }
}
</style>
