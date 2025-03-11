<template>
  <section id="gallary-card" class="container lg:px-0 px-4 mb-32">
    <ui-title title="معرض الصور" />
    <div class="flex justify-center flex-wrap space-x-4 rtl:space-x-reverse pt-6 pb-20">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="[
          'px-4 py-2 rounded-lg transition-all',
          activeTab === index
            ? 'text-purple-900 lg:font-semibold lg:text-lg '
            : 'text-gray-300 lg:font-semibold lg:text-lg ',
        ]"
      >
        {{ tab.name }}
      </button>
    </div>
    <div>
      <swiper-wrapper
        ref="swiperRef"
        class="feedbackSlider lg:px-0 px-4"
        :items="[1, 2, 3, 4, 5]"
        :options="swiperOptions"
        :arrows="true"
      >
        <template #default >
          <GallaryGrid />
        </template>
      </swiper-wrapper>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref(0);
const swiperRef = ref(null);

// const swiperOptions = {
//   autoPlay: true,
//   loop: true,
//   breakpoints: {
//     2500: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//       centeredSlides: true,
//     },
//     1081: {
//       slidesPerView: 1.8,
//       spaceBetween: 16,
//       centeredSlides: true,
//     },
//     991: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },
//   },
//   pagination: false,
// };

const tabs = [
  { name: "منتجات مواد مجمدة" },
  { name: "منتجات الألبان" },
  { name: "المشروبات" },
  { name: "المعلبات" },
];

const changeTab = (index) => {
  activeTab.value = index;
  swiperRef.value?.swiper.slideTo(index); 
}
</script>
