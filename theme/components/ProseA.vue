<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  },
  /**
   * `true` if `href` points to a static file
   */
  static: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NuxtLink :to="href" :blank="blank" :static="static">
    <slot />
  </NuxtLink>
</template>

<style lang="postcss" scoped>
:not(h1, h2, h3, h4) > a {
  color: v-bind($dt('prose.a.color'));
  font-weight: v-bind($dt('prose.a.font-weight'));
  text-decoration: v-bind($dt('prose.a.text-decoration'));
  &:hover {
    text-decoration: v-bind($dt('prose.a.hover-text-decoration')) !important;
  }
}
</style>
