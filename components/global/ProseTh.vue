<template>
  <th>
    <slot />
  </th>
</template>

<style lang="ts" scoped>
css({
  th: {
    color: '{prose.th.color.light}',
    padding: '{prose.th.padding}',
    fontWeight: '{prose.th.fontWeight}',
    "&:first-child": { paddingLeft: "0" },
    "&:last-child": { paddingRight: "0" },
    '@dark': {
      color: '{prose.th.color.dark}',
    }
  }
})
</style>
