<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6 mb-8 overflow-hidden"
  >
    <div
      v-for="(image, index) in images"
      :key="image"
      class="relative overflow-hidden rounded-lg bg-black h-[282px]"
    >
      <img
        :src="image"
        :alt="'Gallery image ' + (index + 1)"
        class="w-full h-full object-cover transition-transform hover:scale-105"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
];
</script>