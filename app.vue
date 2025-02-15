<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: () => ({
    dir: "rtl",
    lang: "ar",
  }),
  meta: [
    { property: "og:title", content: "Almaseya" },
    { property: "og:description", content: "Almaseya" },
    { property: "og:image", content: "/og-image.png" },
  ],
});
</script>
