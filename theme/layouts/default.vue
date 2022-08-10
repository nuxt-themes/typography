<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  color: v-bind($dt('colors.primary.500'));
}
</style>
