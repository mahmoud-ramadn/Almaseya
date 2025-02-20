<template>
     <div
      class="container flex flex-col lg:flex-row lg:justify-start gap-x-6 justify-between items-center relative z-10"
    >
      <img
        src="@/assets/images/logo.webp"
        alt="Company Logo"
        class="w-fit max-w-[200px] lg:max-w-[250px] mb-4 lg:mb-0"
      />
      <div class="relative lg:mr-52 lg:max-w-[364px] min-w-48 mt-4 w-full">
        <input
          type="text"
          class="h-11 w-full rounded-full bg-transparent border pr-4 text-white border-white placeholder:font-medium placeholder:text-gray-500"
          placeholder="بحث"
          aria-label="Search"
        />
        <span
          class="w-16 h-8 rounded-full bg-blue-600 absolute flex items-center justify-center text-white left-2 top-1/2 -translate-y-1/2"
        >
          <svg-icon name="search" class="size-6 fill-white" />
        </span>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>