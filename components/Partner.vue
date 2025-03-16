<template>
  <Vue3Marquee
    :duration="15"
    :clone=" true"
    :loop="0"
    :pauseOnHover="true"
    class="mt-12 mb-8 vue3-marquee w-full overflow-hidden"
  >
    <div class="flex gap-x-16 mx-3 w-full justify-between">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="cursor-grab lg:cursor-pointer flex items-center gap-2"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class=" object-contain size-12 aspect-square rounded-lg shadow-md"
          loading="lazy"
        />
        <p class="text-base font-medium">{{ item.title }}</p>
      </div>
    </div>
  </Vue3Marquee>

</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import one from "../assets/images/Partners/1.webp";

const items = [
  {
    id: 1,
    title: "تسلا",
    image: one,
  },
  {
    id: 2,
    title: "مايكروسوفت",
    image:
      "https://w7.pngwing.com/pngs/719/781/png-transparent-windows-logo-microsoft-windows-scalable-graphics-logo-computer-file-microsoft-logo-icon-angle-text-rectangle.png",
  },
  {
    id: 3,
    title: "ادوبي XD",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s",
  },
  {
    id: 4,
    title: "جوجل",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 5,
    title: "فيسبوك",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    id: 6,
    title: "أبل",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 7,
    title: "أمازون",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 8,
    title: "لينكدإن",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
];
</script>




