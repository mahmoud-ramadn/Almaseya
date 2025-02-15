<template>
  <p class="flex items-center gap-x-4">
    <img
      src="@/assets/icons/svg/star.svg"
      alt="star"
      class="size-6 text-blue-500"
    />
    {{ text }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
