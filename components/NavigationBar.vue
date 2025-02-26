<template>
  <div
    class="container flex flex-col lg:flex-row lg:justify-start gap-x-12 gap-y-5 items-center relative z-10"
  >
    <img
      src="@/assets/images/logo.webp"
      alt="Company Logo"
      class="w-fit max-w-[200px] lg:max-w-[250px] mb-4 lg:mb-0"
    />
    <ul
      class="relative flex-wrap lg:justify-normal gap-4 justify-center flex items-center"
    >
      <li
        v-for="(item, index) in NavLinks"
        @click="scrollToNextSection(item.section)"
        class="font-medium cursor-pointer lg:text-base text-xs text-white"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const NavLinks = [
  {
    title: "الرئيسية",
    section: "",
  },
  {
    title: "من نحن",
    section: "about-us",
  },
  {
    title: "القيمة المضافة",
    section: "value-added",
  },
  {
    title: "المبادئ",
    section: "principles",
  },
  {
    title: "خدماتنا",
    section: "our-services",
  },
  {
    title: "منتجاتنا",
    section: "our-products",
  },
  {
    title: "معرض الصور",
    section: "gallary-card",
  },
  {
    title: "آراد العملاء",
    section: "clients",
  },
];

function scrollToNextSection(sectionName: string) {
  const nextSection = document.getElementById(sectionName);
  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }
}
</script>
