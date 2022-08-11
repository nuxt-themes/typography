<template>
  <button @click="copyCode">
    {{ state }}
  </button>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { ref } from '#imports'

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

const state = ref('copy')

const { copy: copyToClipboard } = useClipboard()

const copyCode = () => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied'

      setTimeout(() => {
        state.value = 'copy'
      }, 1500)
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.warn("Couldn't copy to clipboard!")
    })
}
</script>

<style lang="postcss" scoped>
button {
  display: flex;
  cursor: pointer;
  text-transform: capitalize;

  background-color: v-bind($dt('colors.gray.700'));
  border-radius: v-bind($dt('border-radius.md'));
  padding: v-bind($dt('spacing.1'));
  color: v-bind($dt('colors.gray.50'));

  &:hover {
    color: v-bind($dt('colors.primary.50'));
  }
}
</style>
