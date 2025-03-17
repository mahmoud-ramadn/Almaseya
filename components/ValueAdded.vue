<template>
  <section
    id="value-added"
    class="lg:max-w-[1288px] w-full mx-auto px-4 py-16 pb-20"
  >
    <ui-title title="القيمة المضافة" />
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-2 md:gap-x-[135px] gap-x-6 gap-y-12 justify-center items-center mt-24"
    >
      <div
        v-for="(item, index) in ValueAdded"
        :key="index"
        class="self-center text-center space-y-4"
      >
        <img
          :src="item.icon"
          :alt="item.title"
          class="text-purple-900 mx-auto size-10"
        />
        <p class="font-medium text-base lg:text-lg">
          {{ item.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import four from "../assets/icons/svg/box-tick.svg";
import one from "../assets/icons/svg/convert-3d-cube.svg";
import seven from "../assets/icons/svg/courthouse.svg";
import eight from "../assets/icons/svg/export.svg";
import two from "../assets/icons/svg/maximize.svg";
import six from "../assets/icons/svg/medal-star.svg";
import five from "../assets/icons/svg/truck-tick.svg";
import three from "../assets/icons/svg/verify.svg";

const ValueAdded = [
  {
    icon: one,
    title: "خدمة ما بعد البيع",
  },
  {
    icon: two,
    title: "جميع المقاسات حسب الديكور والمكان",
  },
  {
    icon: three,
    title: "الضمان",
  },
  {
    icon: four,
    title: "الجودة والصيانة",
  },
  {
    icon: five,
    title: "إمكانية التصدير للخارج",
  },
  {
    icon: six,
    title: "خبرة الكادر العريقة السرية",
  },
  {
    icon: seven,
    title: "مصنع معتمد لدى وزارات وجامعات",
  },
  {
    icon: eight,
    title: "إمكانية التنفيذ في جميع أنحاء المملكة",
  },
];
</script>
