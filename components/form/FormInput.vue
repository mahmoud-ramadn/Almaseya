<template>
  <div class="text-start">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @blur="$emit('blur')"
      class="mt-1 block w-full rounded-lg transition-colors duration-200 h-14 px-4"
      :class="[
        error
          ? 'border border-red-500 focus:border-red-500 focus:ring focus:ring-red-500/15 focus:ring-opacity-50'
          : 'border  border-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-500/50 focus:ring-opacity-50',
      ]"
      :placeholder="placholder"
    />
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  placholder: string;
  modelValue: string;
  type?: string;
  error?: string;
}>();

defineEmits<{
  "update:modelValue": [value: string];
  blur: [];
}>();
</script>
