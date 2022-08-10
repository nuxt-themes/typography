<template>
  <strong>
    <slot />
  </strong>
</template>

<style lang="postcss" scoped>
strong {
  font-weight: v-bind($dt('prose.strong.font-weight'));
}
</style>
