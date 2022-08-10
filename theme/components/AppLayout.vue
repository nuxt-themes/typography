<template>
  <div>
    <header>{{ $theme.value.name }}</header>
    <main><slot /></main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
header {
  background: #eee;
  padding: 20px;
}
main {
  padding: 20px;
}
</style>
