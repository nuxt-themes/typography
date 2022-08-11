<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h1 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
  </h1>
</template>
>

<style lang="postcss" scoped>
h1 {
  /* TODO */
  /* @apply scroll-mt-[calc(var(--header-height)+4.5rem)] sm:scroll-mt-[calc(var(--header-height)+2rem)]; */
  color: v-bind($dt('prose.h1.color'));
  margin: v-bind($dt('prose.h1.margin'));
  font-size: v-bind($dt('prose.h1.font-size'));
  font-weight: v-bind($dt('prose.h1.font-weight'));
  line-height: v-bind($dt('prose.h1.line-height'));
}

h1 + * {
  margin-top: 0;
}

h1 > a {
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 2px;
    height: calc(100%+2px);
    width: calc(100%-4px);
    content: '';
  }

  &:hover {
    &:before {
      border-bottom: v-bind($dt('prose.h1.hover-border-bottom'));
    }
    &:after {
      position: absolute;
      right: 1.25rem;
      height: 0.75rem;
      width: 0.75rem;
      content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'/%3E%3C/svg%3E");
    }
  }
}

.dark h1 > a:hover::after {
  content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#fff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'/%3E%3C/svg%3E");
}
</style>
