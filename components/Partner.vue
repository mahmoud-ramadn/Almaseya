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
            :src="item.image"
            :alt="item.id"
            class="object-cover size-10 aspect-square   rounded-lg"
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

const items = [
  {
    id: 1,
    title: "تسلا",
    image:"https://static.vecteezy.com/system/resources/previews/020/336/044/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
  },
  {
    id: 2,
    title: "مايكروسوفت",
    image:"https://w7.pngwing.com/pngs/719/781/png-transparent-windows-logo-microsoft-windows-scalable-graphics-logo-computer-file-microsoft-logo-icon-angle-text-rectangle.png",
  },

  {
    id: 3,
    title: "ادوبي xd",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s",
  },
  {
    id: 4,
   title: "مايكروسوفت",
    image:"https://w7.pngwing.com/pngs/719/781/png-transparent-windows-logo-microsoft-windows-scalable-graphics-logo-computer-file-microsoft-logo-icon-angle-text-rectangle.png",
  },
  {
    id: 4,
    title: "ادوبي xd",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s",
  },
  {
    id: 5,
    title: "تسلا",
    image:"https://static.vecteezy.com/system/resources/previews/020/336/044/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
  },
  {
    id: 6,
   title: "مايكروسوفت",
    image:"https://w7.pngwing.com/pngs/719/781/png-transparent-windows-logo-microsoft-windows-scalable-graphics-logo-computer-file-microsoft-logo-icon-angle-text-rectangle.png",
  },
  {
    id: 7,
    title: "ادوبي xd",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s",
  },
  {
    id: 8,
   title: "مايكروسوفت",
    image:"https://w7.pngwing.com/pngs/719/781/png-transparent-windows-logo-microsoft-windows-scalable-graphics-logo-computer-file-microsoft-logo-icon-angle-text-rectangle.png",
  },
  {
    id: 9,
    title: "ادوبي xd",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s",
  },
  {
    id: 10,
    title: "ادوبي xd",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s",
  },
]

// const items = [
//   {
//     id: 1,
//     title: "ميرو",
//     image: new URL("@/assets/images/partners/1.webp", import.meta.url).href,
//   },
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
