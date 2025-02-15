<template>
  <h2
    class="relative text-4xl font-bold w-fit text-center mx-auto before:content-[''] before:absolute py-2 before:rounded-md before:-bottom-1 before:h-1 before:w-[60%] before:right-0 before:bg-blue-500 before:z-[2]"
  >
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
