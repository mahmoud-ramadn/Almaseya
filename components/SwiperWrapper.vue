<template>
  <div>
    <client-only>
      <div class="relative currentSwiper">
        <div :class="{ 'lg:px-0': arrows }">
          <Swiper
            :modules="[
              SwiperAutoplay,
              SwiperNavigation,
              SwiperPagination,
              SwiperEffectFade,
            ]"
            :slides-per-view="currentProps?.slidesPerView"
            :loop="currentProps?.loop"
            :autoplay="currentProps?.autoPlay"
            :space-between="currentProps?.spaceBetween"
            :breakpoints="currentProps?.breakpoints"
            :centered-slides="currentProps?.centeredSlides"
            v-bind="mapCurrentProps"
            :items="items"
            :effect="currentProps?.effect"
            :options="options"
            @swiper="onSwiperLoad"
            @slide-change="onSlideChange"
          >
            <SwiperSlide
              v-for="(item, index) in items"
              :key="item?.id || index"
              class="!h-auto"
              :class="{ 'active-slide': index === swiper?.activeIndex }"
            >
              <slot :item="item" />
            </SwiperSlide>
            <div
              v-if="arrows"
              class="py-10 flex arrow justify-center space-x-4 rtl:space-x-reverse"
            >
              <button
                @click="swiper?.slidePrev()"
                class="border-2 border-purple-500 hover:bg-purple-500 size-10 hover:text-white text-purple-500 flex justify-center items-center rounded-full  transition-colors"
              >
                <svg-icon name="arrow-right" class="text-current" />
              </button>

              <button
                @click="swiper?.slideNext()"
                class="border-2  border-purple-500 hover:bg-purple-500 size-10  hover:text-white text-purple-500 flex justify-center items-center rounded-full disabled:cursor-not-allowed transition-colors"
              >
                <svg-icon name="arrow-right" class="text-current rotate-180" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
      <template #fallback>
        <slot name="fallback" />
      </template>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

/**
 */
type SlideItem = {
  id?: string | number;
  [key: string]: any;
};

/**
 * Type definition for Swiper options
 */
type OptionsType = {
  slidesPerView?: number;
  loop?: boolean;
  autoPlay?:
    | {
        delay?: number;
        disableOnInteraction?: boolean;
      }
    | boolean;
  centeredSlides?: boolean;
  spaceBetween?: number;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  breakpoints?: Record<
    number,
    {
      slidesPerView?: number;
      spaceBetween?: number;
      centeredSlides?: boolean;
    }
  >;
  pagination?: boolean;
  grid?: {
    rows: number;
    fill?: "row" | "column";
  };
};

interface Props {
  items: SlideItem[];
  options?: OptionsType;
  arrows?: boolean;
  gridRows?: number; // New prop for grid rows
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({
    slidesPerView: 1,
    loop: true,
    autoPlay: false,
    spaceBetween: 30,
    pagination: false,
    centeredSlides: false,
    breakpoints: {},
    grid: undefined, // Default grid configuration
  }),
  arrows: false,
  gridRows: 1, // Default number of grid rows
});

// Merge props value with defaults
const currentProps = computed(() => {
  return {
    ...props?.options,
  };
});

// Compute grid options

// Map current props
const mapCurrentProps = computed(() => {
  return {
    ...(currentProps.value?.pagination && {
      pagination: { clickable: true },
    }),
  };
});

// Refs
const swiper = ref();

type SwiperInstance = {
  slideNext?: () => void;
  slidePrev?: () => void;
  activeIndex?: number;
  realIndex?: number; // الفهرس الحقيقي في وضع الحلقة
};

const onSwiperLoad = (value: SwiperInstance) => {
  swiper.value = value;
};

const onSlideChange = (swiperInstance: SwiperInstance) => {
  swiper.value = swiperInstance;
  emit("slide-change", swiperInstance.realIndex); // استخدام الفهرس الحقيقي في وضع الحلقة
};

const next = () => {
  swiper.value?.slideNext();
};

const prev = () => {
  swiper.value?.slidePrev();
};

const slideTo = (index: number) => {
  if (swiper.value) {
    swiper.value.slideTo(index);
  }
};

defineExpose({
  next,
  prev,
  slideTo,
});

const emit = defineEmits(["slide-change"]);
</script>

<style lang="postcss">
.currentSwiper {
  .swiper {
    &-pagination {
      @apply relative flex mt-10 !bottom-0 items-center justify-center;
      &-bullet {
        @apply !w-4 !h-4 border border-blue-600 bg-transparent;
        &-active {
          @apply bg-blue-600;
        }
      }
    }
  }
}

.active-slide {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}
.active-button {
  background-color: white;
  color: #9747ff;
}
</style>