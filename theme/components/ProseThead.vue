<template>
  <thead>
    <slot />
  </thead>
</template>

<style lang="postcss" scoped>
thead {
  border-bottom: v-bind($dt('prose.thead.border-bottom'));
}
</style>
