<template>
  <!-- <Head>
    <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swaps" />
  </Head> -->
  <nav>
    <NuxtLink to="/" v-if="$route.path !== '/'">
      <Icon name="ph:house-simple" />
    </NuxtLink>
    <a href="https://github.com/nuxt-themes/typography" target="_blank" rel="noopener">
      <Icon name="carbon:logo-github" />
    </a>
    <button @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'" >
      <Icon name="ph:sun" v-if="$colorMode.preference === 'light'" />
      <Icon name="ph:moon" v-else />
    </button>
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
    '@dark': {
      backgroundColor: '{colors.gray.900}',
      color: '{colors.gray.100}'
    },
  },

  nav: {
    position: 'fixed',
    display: 'flex',
    top: '10px',
    right: '10px',
    alignItems: 'center',
    borderRadius: '{space.8}',
    justifyContent: 'center',
    backdropFilter: 'blur(20px)',
    zIndex: 1000,
    'a, button': {
      display: 'flex',
      padding: '{space.8}',
      alignItems: 'center',
      cursor: 'pointer',
      color: '{colors.gray.600}',
      '@dark': {
        color: '{colors.gray.400}'
      },
      '&:hover': {
        color: '{colors.gray.900}',
        '@dark': {
          color: '{colors.gray.100}'
        }
      }
    }
  },

  '.page': {
    padding: '{space.64} {space.24}',
    minHeight: '100vh',
    maxWidth: '80ch',
    margin: 'auto'
  },
})
</style>
