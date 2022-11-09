<script setup lang="ts">
import type { PropType } from 'vue'
import type { Lang } from 'shiki-es'

defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String as PropType<Lang>,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  }
})

const hovered = ref(false)
</script>

<template>
  <div :class="[`highlight-${language}`]" class="prose-code" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>

    <slot />

    <ProseCodeCopyButton :show="hovered" :content="code" class="copy-button" />
  </div>
</template>

<style lang="ts" scoped>
css({
  ".prose-code": {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    margin: '{space.32} 0',
    borderRadius: '{radii.md}',
    border: '1px solid {colors.gray.200}',
    color: '{prose.code.block.color.light}',
    backgroundColor: '{prose.code.block.backgroundColor.light}',
    "@dark": {
      color: '{prose.code.block.color.dark}',
      backgroundColor: '{prose.code.block.backgroundColor.dark}',
      borderColor: '{colors.gray.700}'
    },

    "&.highlight-zsh, &.highlight-sh, &.highlight-bash, &.highlight-shell, &.highlight-shellscript": {
      ":deep(code)": {
        ".line": {
          position: "relative",
          paddingLeft: "1rem"
        },
        ".line::before": {
          content: "'>'",
          position: "absolute",
          top: "0",
          left: "-0.1rem",
          display: "block",
          userSelect: "none",
          fontWeight: 700,
          color: '{colors.primary.500}',
          fontFamily: '{fonts.code}'
        }
      }
    }
  },

  '.copy-button': {
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  ":deep(code)": { display: "flex", flexDirection: "column" },

  ":deep(.line)": { display: "inline-table", minHeight: "1rem" },

  ".filename": {
    position: "absolute",
    right: "1rem",
    top: "0.5rem",
    fontFamily: '{fonts.code}',
    color: '{colors.gray.400}',
    borderRadius: '{radii.lg}',
    fontSize: '{fontSizes.xs}',
    lineHeight: '{leads.normal}'
  },

  ":deep(pre)": {
    display: "flex",
    flex: 1,
    overflowX: "auto",
    margin: "0",
    padding: '{space.16}',
    lineHeight: '{leads.relaxed}',
  },

  ":deep(.line.highlight)": {
    backgroundColor: '{colors.gray.700}'
  }
})
</style>
