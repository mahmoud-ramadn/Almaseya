<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:gap-6 gap-4 mb-8 overflow-hidden"
  >
    <div
      v-for="(image, index) in images"
      :key="image"
      class="relative overflow-hidden rounded-lg bg-black h-[282px]"
    >
      <img
        :src="image"
        :alt="'Gallery image ' + (index + 1)"
        class="w-full h-full object-cover aspect-square"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  images: {
    type: Array as () => string[],
    required: true,
  },
});
</script>