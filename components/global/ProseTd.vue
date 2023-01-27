<template>
  <td>
    <slot />
  </td>
</template>

<style lang="ts" scoped>
css({
  "tbody td": {
    fontFamily: '{typography.font.body}',
    padding: '{prose.tbody.td.padding}',
    "&:first-child": { paddingLeft: "0" },
    "&:last-child": { paddingRight: "0" },
  }
})
</style>
