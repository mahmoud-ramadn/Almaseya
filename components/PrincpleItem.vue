<template>
  <p class="flex items-center text-purple-900 gap-x-4">
    <img
      src="@/assets/icons/svg/star.svg"
      alt="star"
      class="size-6 "
    />
    {{ text }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
