<template>
  <div class="group relative">
    <img
      :src="product.image"
      :alt="product.name"
      class="md:size-[212px]  size-32  shrink-0 cursor-pointer z-20 absolute left-1/2 -translate-x-1/2 border-purple-500 border ring-purple-500 ring-2 ring-offset-4  md:top-[-4.25rem]       rounded-full object-cover transition-all duration-300"
    />
    <div
      class="bg-gray-50 rounded-[2rem] relative overflow-hidden shadow-lg mt-12 h-[138px] group-hover:h-[262px] transition-all duration-300 border-b-8 border-purple-500"
    >
      <div
        class="absolute inset-x-0 bottom-0 px-5 pb-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      >
        <p class="text-purple-500 md:text-2xl font-medium text-center">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
