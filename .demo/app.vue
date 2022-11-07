<template>
  <nav @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'" >
    <Icon name="ph:sun" v-if="$colorMode.preference === 'light'" />
    <Icon name="ph:moon" v-else />
  </nav>
  <article class="page">
    <NuxtPage />
  </article>
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
  nav: {
    position: 'fixed',
    display: 'flex',
    right: '10px',
    top: '10px',
    borderRadius: '{space.8}',
    justifyContent: 'flex-end',
    // backgroundColor: '{colors.neutral.white}',
    backdropFilter: 'blur(20px)',
    zIndex: 1000,
    cursor: 'pointer',
    padding: '{space.8}',
  },
  '.page': {
    padding: '{space.16} {space.24}',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
})
</style>
