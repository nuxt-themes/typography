<template>
  <tr>
    <slot />
  </tr>
</template>

<style lang="postcss" scoped>
tbody tr {
  border-bottom: v-bind($dt('prose.tbody.tr.border-bottom'));
}
</style>
