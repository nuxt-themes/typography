<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <ProseH2 :id="`${name}-section`">
      {{ name }}
    </ProseH2>

    <div class="card">
      <slot name="code" />

      <Markdown :use="$slots.render" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  padding: 0 1rem;
  border: 1px solid v-bind($dt('colors.gray-200'));
  border-radius: v-bind($dt('border-radius.rounded-lg'));
}
</style>
