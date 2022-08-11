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
    <h2>
      {{ name }}
    </h2>

    <div class="card">
      <h3 style="text-decoration: none;">
        Code
      </h3>

      <slot name="code" />

      <h3>
        Render
      </h3>

      <Markdown :use="$slots.render" unwrap="p" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  padding: 0 1.5rem 1.5rem 1.5rem;
  border: 1px solid v-bind($dt('colors.gray-200'));
  border-radius: v-bind($dt('border-radius.rounded-lg'));
}
</style>
