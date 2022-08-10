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
    <ProseH2 :id="name">
      {{ name }}
    </ProseH2>

    <div class="px-6 pb-6 border border-gray-200 rounded-lg">
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
