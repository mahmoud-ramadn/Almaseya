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
            :class="{ 'active-slide': index === swiper?.activeIndex }"
          >
            <SwiperSlide
              v-for="(item, index) in items"
              :key="item?.id || index"
              class="!h-auto"
            >
              <slot :item="item" />
            </SwiperSlide>
            <div
              v-if="arrows"
              class="py-10 flex arrow justify-center space-x-4 rtl:space-x-reverse"
            >
              <button
                @click="swiper?.slidePrev()"
                class="border-2 border-purple-500 size-10 text-purple-500 flex justify-center items-center rounded-full disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
              >
                <svg-icon name="arrow-right" class="text-current" />
              </button>

              <button
                @click="swiper?.slideNext()"
                class="border-2 border-white bg-purple-500 size-10 text-white flex justify-center items-center rounded-full disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
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
/**
 * Type definition for individual slide item
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
};

/**
 * Props interface for the SwiperWrapper component
 */
interface Props {
  items: SlideItem[];
  options?: OptionsType;
  arrows?: boolean;
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
  }),
  arrows: false,
});

// Merge props value with defaults
const currentProps = computed(() => {
  return {
    ...props?.options,
  };
});

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
};

const onSwiperLoad = (value: SwiperInstance) => {
  swiper.value = value;
};

const next = () => {
  swiper.value?.slideNext();
};

const prev = () => {
  swiper.value?.slidePrev();
};

defineExpose({
  next,
  prev,
});
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
