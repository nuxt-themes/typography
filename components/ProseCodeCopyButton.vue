<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useAppConfig } from '#imports'

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  show: {
    type: Boolean,
    default: false
  }
})

const { copy: copyToClipboard } = useClipboard()
const { prose } = useAppConfig()

const state = ref('init')

const copy = (_e: MouseEvent) => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied'
      setTimeout(() => {
        state.value = 'init'
      }, 1000)
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.warn("Couldn't copy to clipboard!", err)
    })
}
</script>

<template>
  <button :class="[(show || state === 'copied') && 'show' ]" @click="copy">
    <span class="sr-only">Copy to clipboard</span>
    <span class="icon-wrapper">
      <Transition name="fade">
        <Icon v-if="state === 'copied'" :name="prose.copyButton?.iconCopied" size="18" class="copied" />
        <Icon v-else :name="prose.copyButton?.iconCopy" size="18" />
      </Transition>
    </span>
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    padding: '8px',
    margin: '8px',
    borderRadius: '{radii.sm}',
    transition: 'all 100ms',
    transform: "scale(0.75)",
    opacity: 0,
    backdropFilter: 'blur(4px)',
    '&.show': {
      transform: "scale(1)",
      opacity: 1
    },
    '.icon-wrapper': {
      display: 'block',
      position: 'relative',
      width: '18px',
      height: '18px',
      '.icon': {
        display: 'block',
        position: 'absolute'
      },
      '.fade-enter-active, .fade-leave-active': {
        transition: 'opacity 200ms'
      },
      '.fade-enter-from, .fade-leave-to': {
        opacity: 0
      }
    }
  },
})
</style>
