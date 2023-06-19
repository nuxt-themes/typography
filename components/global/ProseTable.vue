<template>
  <div class="prose-table">
    <table>
      <slot />
    </table>
  </div>
</template>

<style lang="ts" scoped>
css({
  ".prose-table": {
    overflowX: "auto",
    maxWidth: "100%",
    margin: '{prose.table.margin}'
  },
  table: {
    fontFamily: '{typography.font.body}',
    width: "100%",
    tableLayout: "auto",
    textAlign: '{prose.table.textAlign}',
    fontSize: '{prose.table.fontSize}',
    lineHeight: '{prose.table.lineHeight}',
    '& :deep(code)': {
      whiteSpace: 'nowrap'
    }
  }
})
</style>
