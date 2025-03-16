<!-- <template>
  <swiper
    :slidesPerView="3"
    :grid="{
      rows: 2,
    }"
    :spaceBetween="30"
    :pagination=false

    :breakpoints="{
        '320': {
          slidesPerView: 2,
          grid: {
            rows: 2
          }
        },
        '0': {
          slidesPerView: 1.2,
          grid: {
            rows: 2
          }
        },
        '768': {
          slidesPerView: 3,
          grid: {
            rows: 2
          }
        },
        '1024': {
          slidesPerView: 4,
          grid: {
            rows: 2
          }
        }
      }"
  
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/grid';
  import 'swiper/css/pagination';


  // import required modules
  import { Grid, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Grid, Pagination],
      };
    },
  };
</script> -->

<template>
  <div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>