<template>
  <div class="text-start">
    <textarea
      :id="id"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      @blur="$emit('blur')"
      :rows="rows"
      class="mt-1 block w-full rounded-lg transition-colors duration-200 px-4 py-3"
      :class="[
        error
          ? 'border border-red-500 focus:border-red-500 focus:ring focus:ring-red-500/55 focus:ring-opacity-50'
          : 'border border-gray-100 focus:border-blue-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50',
      ]"
      :placeholder="placholder"
    ></textarea>
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  placholder: string;
  modelValue: string;
  rows?: number;
  error?: string;
}>();

defineEmits<{
  "update:modelValue": [value: string];
  blur: [];
}>();
</script>
