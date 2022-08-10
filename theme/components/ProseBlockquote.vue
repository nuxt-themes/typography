<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="postcss" scoped>
blockquote {
  color: v-bind($dt('prose.blockquote.color'));
  font-weight: v-bind($dt('prose.blockquote.font-weight'));
  border-left: v-bind($dt('prose.blockquote.border-left'));
  margin: v-bind($dt('prose.blockquote.margin'));
  padding: v-bind($dt('prose.blockquote.padding'));

  quotes: '201C' '201D' '2018' '2019';
}

blockquote p:first-of-type::before {
  content: '';
}

blockquote p:last-of-type::after {
  content: '';
}
</style>
