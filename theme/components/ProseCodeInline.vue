<template>
  <code>
    <slot />
  </code>
</template>

<style lang="postcss" scoped>
code {
  @apply overflow-hidden;
  color: v-bind($dt('prose.code-inline.color'));
  background-color: v-bind($dt('prose.code-inline.background-color'));
  border-radius: v-bind($dt('prose.code-inline.border-radius'));
  padding: v-bind($dt('prose.code-inline.padding'));
  font-size: v-bind($dt('prose.code-inline.font-size'));
  font-weight: v-bind($dt('prose.code-inline.font-weight'));
}

tbody code {
  font-size: v-bind($dt('prose.code-inline.font-size'));
}

a {
  @apply overflow-hidden;

  code {
    color: v-bind($dt('prose.a.color'));
    font-weight: v-bind($dt('prose.a.font-weight'));
  }
}

h1 a,
h2 a,
h3 a,
h4 a {
  code {
    color: inherit !important;
    font-size: inherit !important;
    background-color: v-bind($dt('prose.code-inline.background-color')) !important;
    border-radius: v-bind($dt('prose.code-inline.border-radius')) !important;
    padding: v-bind($dt('prose.code-inline.padding')) !important;
  }
}
</style>
