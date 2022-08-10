<template>
  <hr>
</template>

<style lang="postcss" scoped>
hr {
  margin: v-bind($dt('prose.hr.margin'));
  border-top: v-bind($dt('prose.hr.border-top'));
}

hr + * {
  margin-top: 0;
}
</style>
