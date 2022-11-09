<template>
  <td>
    <slot />
  </td>
</template>

<style lang="ts" scoped>
css({
  "tbody td": {
    padding: '{prose.tbody.td.padding}',
    "&:first-child": { paddingLeft: "0" },
    "&:last-child": { paddingRight: "0" },
  }
})
</style>
