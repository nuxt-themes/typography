<template>
  <th>
    <slot />
  </th>
</template>

<style lang="ts" scoped>
css({
  th: {
    fontFamily: '{typography.font.display}',
    color: '{prose.th.color}',
    padding: '{prose.th.padding}',
    fontWeight: '{prose.th.fontWeight}',
    "&:first-child": { paddingLeft: "0" },
    "&:last-child": { paddingRight: "0" },
  }
})
</style>
