<template>
  <div
    class="container flex      lg:justify-start  md:flex-row flex-row-reverse  justify-center  md:gap-x-12 gap-y-5 items-center relative z-10"
  >
    <img
      src="@/assets/images/logo.webp"
      alt="Company Logo"
      class="w-fit max-w-[200px] lg:max-w-[250px]  lg:mb-0"
    />
    <ul
      class="relative flex-wrap  lg:justify-normal gap-4 justify-center md:flex hidden items-center"
    >
      <li
        v-for="(item, index) in NavLinks"
        @click="scrollToNextSection(item.section)"
        class="font-medium cursor-pointer lg:text-base text-xs text-white"
      >
        {{ item.title }}
      </li>
    </ul>



   <Sheet class=" md:hidden block">
    <SheetTrigger as-child class=" md:hidden absolute right-4">
        <SvgIcon name="bars" class=" size-5 fill-white  " />
    </SheetTrigger>
    <SheetContent  class=" bg-gradient-purple border-l    pr-8  border-purple-500 ">
      <SheetClose  class="  focus:outline-none">
        <div class=" w-full">
          <ul
         class="w-ful  mt-16 space-y-6"
       >
             <li
               v-for="(item, index) in NavLinks"
               @click="scrollToNextSection(item.section)"
               class="  font-semibold cursor-pointer w-full   text-start text-lg  text-white"
             >   
                 {{ item.title }}
             </li>
       </ul>
        </div>
      </SheetClose> 

    </SheetContent>
  </Sheet>
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

