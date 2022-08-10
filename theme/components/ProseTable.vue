<template>
  <div class="my-6 max-w-full overflow-x-auto">
    <table>
      <slot />
    </table>
  </div>
</template>

<style lang="postcss" scoped>
table {
  @apply w-full table-auto text-left;
  font-size: v-bind($dt('prose.table.font-size'));
  line-height: v-bind($dt('prose.table.line-height'));
}
</style>
