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

<style lang="postcss" scoped>
.prose-code {
  position: relative;
  overflow: hidden;
  width: 100%;

  color: v-bind($dt('prose.code.color'));
  margin: v-bind($dt('prose.code.margin'));
  border-radius: v-bind($dt('prose.code.border-radius'));

  &:hover {
    .copy-button {
      transform: scale(1);
      opacity: 1;
    }
  }

  &.highlight-zsh,
  &.highlight-sh,
  &.highlight-bash,
  &.highlight-shell,
  &.highlight-shellscript {
    :deep(code) {
      .line {
        position: relative;
        padding-left: 1rem;
      }

      .line::before {
        content: '>';
        color: v-bind($dt('color.primary.500'));
        position: absolute;
        top: 0;
        left: -0.1rem;
        display: block;
        user-select: none;
        font-family: v-bind($dt('fonts.code'));
        font-weight: 700;
      }
    }
  }
}

.copy-button {
  position: absolute;
  background: none;
  border: none;
  right: 0.75rem;
  bottom: 0.5rem;
  transform: scale(0);
  opacity: 0;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

:deep(code) {
  display: flex;
  flex-direction: column;
}

:deep(.line) {
  display: inline-table;
  min-height: 1rem;
}

.filename {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  font-family: v-bind($dt('fonts.code'));
  color: v-bind($dt('prose.code.filename.color'));
  border-radius: v-bind($dt('prose.code.filename.border-radius'));
  font-size: v-bind($dt('prose.code.filename.font-size'));
  line-height: v-bind($dt('prose.code.filename.line-height'));
}

:deep(pre) {
  display: flex;
  flex: 1;
  overflow-x: auto;
  margin: 0;

  padding: v-bind($dt('prose.code.padding'));
  background-color: v-bind($dt('prose.code.background-color'));
  line-height: v-bind($dt('prose.code.line-height'));
}

:deep(.line.highlight) {
  background-color: v-bind($dt('prose.code.line.highlight-background-color'));
}
</style>
