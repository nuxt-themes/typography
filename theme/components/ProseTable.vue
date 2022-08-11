<template>
  <div class="table-wrapper">
    <table>
      <slot />
    </table>
  </div>
</template>

<style lang="postcss" scoped>
.table-wrapper {
  overflow-x: auto;
  max-width: 100%;

  margin: v-bind($dt('prose.table.margin'));
}
table {
  width: 100%;
  table-layout: auto;
  text-align: left;

  font-size: v-bind($dt('prose.table.font-size'));
  line-height: v-bind($dt('prose.table.line-height'));
}
</style>
