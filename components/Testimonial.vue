<template>
  <div :class="cn(' md:mb-10  mb-20 relative', $attrs.class)">
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



const images = [
  "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
];




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
