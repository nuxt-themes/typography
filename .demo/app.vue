<template>
  <Head>
    <Meta name="twitter:card" content="summary_large_image" />
  </Head>
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
  'body': {
    backgroundColor: '{color.white}',
    '@dark': {
      backgroundColor: '{color.gray.900}'
    }
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
      padding: '{space.2}',
      alignItems: 'center',
      cursor: 'pointer',
      color: '{color.gray.600}',
      '@dark': {
        color: '{color.gray.400}'
      },
      '&:hover': {
        color: '{color.gray.900}',
        '@dark': {
          color: '{color.gray.100}'
        }
      }
    }
  },

  '.page': {
    padding: '{space.16} {space.8}',
    minHeight: '100vh',
    maxWidth: '80ch',
    margin: 'auto'
  },
})
</style>
