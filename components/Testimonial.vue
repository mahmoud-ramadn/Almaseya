<template>
  <div :class="cn(' mb-10  relative', $attrs.class)">
    <div class="">
      <swiper-wrapper
        class="feedbackSlider lg:px-0 px-4"
        :items="[1, 2, 3, 4, 5]"
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
  autoPlay: true,
  loop: true,
  breakpoints: {
    2500: {
      slidesPerView: 3.5,
      spaceBetween: 16,
      centeredSlides: true,
    },
    1081: {
      slidesPerView: 3,
      spaceBetween: 16,
      centeredSlides: true,
    },
    991: {
      slidesPerView: 1.8,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 1.1,
      spaceBetween: 15,
    },
  },
  pagination: false,
};
</script>
