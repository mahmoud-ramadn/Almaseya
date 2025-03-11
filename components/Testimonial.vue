<template>
  <div :class="cn(' mb-10  relative', $attrs.class)">
    <div class="">
      <swiper-wrapper
        ref="swiperRef"
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
      slidesPerView: 1.8,
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

const swiperRef = ref();
const activeButton = ref<"prev" | "next" | null>(null); // Track active button state

const goToNext = () => {
  swiperRef.value?.next();
};

const goToPrev = () => {
  swiperRef.value?.prev();
};

const onSlideChange = (swiper: any) => {
  if (swiper.isBeginning) {
    activeButton.value = "prev"; // Highlight previous button when at the start
  } else if (swiper.isEnd) {
    activeButton.value = "next"; // Highlight next button when at the end
  } else {
    activeButton.value = null; // Reset highlight in between
  }
};
</script>
