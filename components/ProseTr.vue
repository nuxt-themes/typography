<template>
  <tr>
    <slot />
  </tr>
</template>

<style lang="ts" scoped>
css({
  'tbody tr': {
    borderBottom: '{prose.tbody.tr.borderBottom}',
    "@dark": {
      borderColor: '{prose.tbody.tr.borderColor.dark}'
    }
  }
})
</style>
