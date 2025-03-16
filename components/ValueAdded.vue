<template>
  <section id="value-added"  class="lg:max-w-[1288px] w-full mx-auto   px-4  py-16  pb-20">
    <ui-title title="القيمة المضافة" />
    <div
      class=" grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2  grid-rows-2   md:gap-x-[135px] gap-x-6 gap-y-12 justify-center  items-center   mt-24"
    >
      <div
        v-for="(item, index) in homeDataSection.added_values "
        :key="index"
        class="     self-center   text-center space-y-4 "
      >
        <img :src="item?.image" alt="value">
        <p class=" font-medium text-base lg:text-lg">
          {{ item.title.ar }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { homeDataSection } = useHomeState();
</script>
