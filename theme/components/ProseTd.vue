<template>
  <td>
    <slot />
  </td>
</template>

<style lang="postcss" scoped>
tbody td {
  vertical-align: top;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  padding: v-bind($dt('prose.tbody.td.padding'));
}
</style>
