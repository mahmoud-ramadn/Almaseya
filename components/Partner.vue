<template>
  <div :class="cn('partners pt-12 pb-8', $attrs.class)">
    <swiper-wrapper
      class="mx-auto pr-4"
      :items="items"
      :options="swiperOptions"
    >
      <template #default="{ item }">
        <div
          :key="item.id"
          class="flex items-center gap-x-3 lg:cursor-pointer cursor-grab"
        >
          <img
            :src="item?.image"
            :alt="item.id"
            class="object-cover size-10 aspect-square"
            loading="lazy"
          />
          <p>{{ item.title }}</p>
        </div>
      </template>
    </swiper-wrapper>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import one from "@/assets/images/partners/1.webp";
import two from "@/assets/images/partners/2.webp";
import three from "@/assets/images/partners/3.webp";
import four from "@/assets/images/partners/4.webp";
import five from "@/assets/images/partners/5.webp";
import six  from "@/assets/images/partners/6.webp";



const items = [
  {
    id: 1,
    title: "ميرو",
    image: one,
    },
  {
    id: 2,
    title: "مايكروسوفت",
    image:two,
  },
  {
    id: 3,
    title: "تيسلا",
    image: three,
  },
  {
    id: 4,
    title: "أوتو",
    image: four,
  },
  {
    id: 5,
    title: "ادوبي xd",
    image: five,
  },
  {
    id: 6,
    title: "ميرو",
    image: six,
  },
  {
    id: 7,
    title: "تيسلا",
    image:three,
  },
  {
    id: 8,
    title: "مايكروسوفت",
    image: two,
  },
  {
    id: 9,
    title: "مايكروسوفت",
    image: two,
  },
  {
    id: 10,
    title: "تيسلا",
    image: three,
  },
  {
    id: 11,
    title: "مايكروسوفت",
    image:two
  },
  {
    id: 12,
    title: "تيسلا",
    image: three,
  },
];

// const items = [
//   {
//     id: 1,
//     title: "ميرو",
//     image: new URL("@/assets/images/partners/1.webp", import.meta.url).href,,
//     },
//   {
//     id: 2,
//     title: "مايكروسوفت",
//     image: new URL("@/assets/images/partners/2.webp", import.meta.url).href,
//   },
//   {
//     id: 3,
//     title: "تيسلا",
//     image: new URL("@/assets/images/partners/3.webp", import.meta.url).href,
//   },
//   {
//     id: 4,
//     title: "أوتو",
//     image: new URL("@/assets/images/partners/4.webp", import.meta.url).href,
//   },
//   {
//     id: 5,
//     title: "ادوبي xd",
//     image: new URL("@/assets/images/partners/5.webp", import.meta.url).href,
//   },
//   {
//     id: 6,
//     title: "ميرو",
//     image: new URL("@/assets/images/partners/6.webp", import.meta.url).href,
//   },
//   {
//     id: 7,
//     title: "تيسلا",
//     image: new URL("@/assets/images/partners/3.webp", import.meta.url).href,
//   },
//   {
//     id: 8,
//     title: "مايكروسوفت",
//     image: new URL("@/assets/images/partners/2.webp", import.meta.url).href,
//   },
//   {
//     id: 9,
//     title: "مايكروسوفت",
//     image: new URL("@/assets/images/partners/2.webp", import.meta.url).href,
//   },
//   {
//     id: 10,
//     title: "تيسلا",
//     image: new URL("@/assets/images/partners/3.webp", import.meta.url).href,
//   },
//   {
//     id: 11,
//     title: "مايكروسوفت",
//     image: new URL("@/assets/images/partners/2.webp", import.meta.url).href,
//   },
//   {
//     id: 12,
//     title: "تيسلا",
//     image: new URL("@/assets/images/partners/3.webp", import.meta.url).href,
//   },
// ];

const swiperOptions = {
  autoPlay: true,
  loop: true,
  breakpoints: {
    1800: {
      slidesPerView: 10,
      spaceBetween: 150,
    },

    1081: {
      slidesPerView: 8,
      spaceBetween: 64,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
  },
};
</script>
