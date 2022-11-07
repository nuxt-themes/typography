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
</script>

<template>
  <div :class="[`highlight-${language}`]" class="prose-code">
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>

    <slot />

    <CopyButton :content="code" class="copy-button" />
  </div>
</template>

<style lang="ts" scoped>
css({
  ".prose-code": {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    margin: "{space.32} 0", /* {prose.code.margin.default} */
    borderRadius: "{radii.md}", /* {prose.code.border-radius} */
    color: "{prose.code.block.color.light}",
    backgroundColor: "{prose.code.block.backgroundColor.light}",
    "@dark": {
      color: "{prose.code.block.color.dark}",
      backgroundColor: "{prose.code.block.backgroundColor.dark}",
    },

    "&:hover": {
      ".copy-button": {
        transform: "scale(1)",
        opacity: 1
      }
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
          color: "{colors.primary.500}",
          fontFamily: "{fonts.code}"
        }
      }
    }
  },

  ".copy-button": {
    position: "absolute",
    background: "none",
    border: "none",
    right: "0.75rem",
    bottom: "0.5rem",
    top: "0.75rem",
    transform: "scale(0)",
    opacity: 0,
    transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms"
  },

  ":deep(code)": { display: "flex", flexDirection: "column" },

  ":deep(.line)": { display: "inline-table", minHeight: "1rem" },

  ".filename": {
    position: "absolute",
    right: "1rem",
    top: "0.5rem",
    fontFamily: "{fonts.code}",
    color: "{colors.gray.400}", /* {prose.code.filename.color} */
    borderRadius: "border.size.lg", /* {prose.code.filename.border-radius} */
    fontSize: "{fontSizes.xs}", /* {prose.code.filename.font-size} */
    lineHeight: "{leads.normal}" /* {prose.code.filename.line-height} */
  },

  ":deep(pre)": {
    display: "flex",
    flex: 1,
    overflowX: "auto",
    margin: "0",
    padding: "{space.16}", /* {prose.code.padding.default} */
    lineHeight: "{leads.relaxed}", /* {prose.code.line-height} */
  },

  ":deep(.line.highlight)": {
    backgroundColor: "{colors.gray.700}" /* {prose.code.line.highlight-background-color} */
  }
})
</style>
