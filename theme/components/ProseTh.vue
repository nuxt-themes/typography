<template>
  <th>
    <slot />
  </th>
</template>

<style lang="postcss" scoped>
thead th {
  @apply align-bottom first:pl-0 last:pr-0;
  color: v-bind($dt('prose.thead.th.color'));
  padding: v-bind($dt('prose.thead.th.padding'));
  font-weight: v-bind($dt('prose.thead.th.font-weight'));
}
</style>
