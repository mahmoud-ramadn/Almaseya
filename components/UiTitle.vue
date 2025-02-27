<template>
  <h2
    :class="[
      'relative text-4xl font-bold w-fit text-center mx-auto py-2',
      customClass,
    ]"
    class="before:content-[''] before:absolute before:rounded-md before:-bottom-2 before:h-1 before:w-[60%] before:right-0 before:bg-purple-500 before:z-[2]"
  >
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  customClass?: string;
}>();
</script>
