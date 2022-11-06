<template>
  <div class="page">
    <ContentDoc />
  </div>
</template>

<style lang="ts">
css({
  html: {
    backgroundColor: '{colors.neutral.white}',
    color: '{colors.gray.900}',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    '@dark': {
      backgroundColor: '{colors.gray.900}',
      color: '{colors.gray.100}'
    },
  },
  '.page': {
    padding: '{space.16} {space.24}',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
})
</style>
