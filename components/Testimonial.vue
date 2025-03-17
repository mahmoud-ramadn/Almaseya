<template>
  <div :class="cn(' md:mb-10  mb-20 relative', $attrs.class as string)">
    <div class="">
      <swiper-wrapper
        class="feedbackSlider lg:px-0 px-4"
        :items="slideItems"
        :options="swiperOptions"
        :arrows="true"
      >
        <template #default="">
          <client-card />
        </template>
      </swiper-wrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

const swiperOptions = {
  autoPlay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    2500: {
      slidesPerView: 3,
      spaceBetween: 16,
      centeredSlides: true,
    },
    1081: {
      slidesPerView: 1.8,
      spaceBetween: 16,
      centeredSlides: true,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
  pagination: false,
};
const slideItems = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
  { id: 4, content: 'Slide 4' },
  { id: 5, content: 'Slide 5' },
];
</script>
