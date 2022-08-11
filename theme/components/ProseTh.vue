<template>
  <th>
    <slot />
  </th>
</template>

<style lang="postcss" scoped>
thead th {
  vertical-align: bottom;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  color: v-bind($dt('prose.thead.th.color'));
  padding: v-bind($dt('prose.thead.th.padding'));
  font-weight: v-bind($dt('prose.thead.th.font-weight'));
}
</style>
