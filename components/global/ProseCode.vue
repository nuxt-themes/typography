<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'
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
    fontSize: '{prose.code.block.fontSize}',
    margin: '{prose.code.block.margin}',
    borderRadius: '{radii.md}',
    border: '1px solid {prose.code.block.borderColor.light}',
    color: '{prose.code.block.color.light}',
    backgroundColor: '{prose.code.block.backgroundColor.light}',
    "@dark": {
      color: '{prose.code.block.color.dark}',
      backgroundColor: '{prose.code.block.backgroundColor.dark}',
      borderColor: '{prose.code.block.borderColor.dark}',
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
          color: '{typography.color.primary.500}',
          fontFamily: '{font.mono}'
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
    top: 0,
    right: 0,
    padding: '0.25rem 0.5rem',
    fontFamily: '{font.mono}',
    color: '{prose.code.block.color.light}',
    borderRadius: '{radii.lg}',
    fontSize: '{fontSize.xs}',
    lineHeight: '{lead.normal}',
    transition: 'opacity 200ms',
    backdropFilter: 'blur(4px)',
    '@dark': {
      color: '{prose.code.block.color.dark}'
    }
  },

  '.prose-code:hover .filename': {
    opacity: 0
  },
  '.prose-code:hover .filename:hover': {
    opacity: 1
  },
  ":deep(pre)": {
    display: "flex",
    flex: 1,
    overflowX: "auto",
    margin: "0",
    padding: '{prose.code.block.pre.padding}',
    lineHeight: '{lead.relaxed}',
  },
  ":deep(pre code)": {
    paddingRight: '30px',
  },

  ":deep(.line.highlight)": {
    backgroundColor: '{prose.code.block.borderColor.light}',
    // No working right now
    // '@dark': {
    //   backgroundColor: '{prose.code.block.borderColor.dark}'
    // }
  }
})
</style>
