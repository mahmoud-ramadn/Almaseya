<template>
  <div class="text-start">
    <textarea
      :id="id"
      :value="modelValue"
      @input="handleInput"
      @blur="$emit('blur')"
      :rows="rows"
      class="mt-1 block w-full resize-none pt-4  h-20 rounded-lg transition-colors duration-200 px-4"
      :class="textareaClasses"
      :placeholder="placeholder"
    ></textarea>
    <p v-if="showError" class="mt-1 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  placeholder: string;
  modelValue: string;
  rows?: number;
  error?: string;
  isDirty?: boolean;
  isBlurred?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  rows: 2,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  blur: [];
  dirty: [isDirty: boolean];
}>();

const handleInput = (event: Event) => {
  const value = (event.target as HTMLTextAreaElement).value;
  emit("update:modelValue", value);
  emit("dirty", true);
};

const showError = computed(() => props.error && (props.isDirty || props.isBlurred));
const textareaClasses = computed(() => ({
  "border border-red-500 focus:border-red-500 focus:ring focus:ring-red-500/15 focus:ring-opacity-50": showError.value,
  "border border-gray-100 focus:border-blue-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50": !showError.value,
}));
</script>