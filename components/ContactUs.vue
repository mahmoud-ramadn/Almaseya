<template>
  <section id="next-section" class="mb-32">
    <ui-title title="تواصل معنا" />
    <div
      class="container mt-24  p-0 flex flex-col-reverse lg:flex-row lg:max-h-[512px]     rounded-2xl justify-between  bg-white shadow-2xl shadow-black/20 gap-y-7  items-center"
    >
      <div class="  w-full   rounded-s-2xl p-8 ">
        <form-contact-form />
      </div>

      <div
        class="w-full lg:max-w-[527px]  lg:max-h-[512px]    py-20 lg:py-40  lg:rounded-e-2xl rounded-2xl bg-[url('@/assets/images/contact.webp')] lg:aspect-auto bg-no-repeat bg-cover flex justify-center items-center"
      >
        <div class="text-center lg:text-left">
          <img src="@/assets/images/logo.webp" alt="logo" class="mx-auto" />
          <div
            class="mt-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-end lg:gap-6"
          >
            <p
              class="flex items-center justify-center lg:justify-start text-white text-sm gap-3"
            >
              <SvgIcon name="location" class="size-6" />
              هيئة المدن الصناعية بخميس مشيط
            </p>
            <a href="tel:+966000000000"
              class="flex items-center justify-center lg:justify-start text-white hover:text-white text-sm gap-3"
            >
              <SvgIcon name="call" class="size-6 text-white" />
              +966000000000
            </a>
          </div>
          <a href="mailto:almaseya@example.com"
            class="flex items-center justify-center lg:justify-start text-white hover:text-white text-sm mt-4 gap-x-4"
          >
            <img src="@/assets/icons/svg/Sms.svg" alt="sms" class="size-6" />
            almaseya@example.com
          </a>
          <div class="flex items-center justify-center gap-x-4 mt-6">
            <nuxt-link
              v-for="(link, index) in socialLinks"
              :key="index"
              :to="link.to"
              class="cursor-pointer"
            >
              <SvgIcon :name="link.icon" class="size-7" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socialLinks = [
  { to: "", icon: "tiktok" },
  { to: "", icon: "snap" },
  { to: "", icon: "insta" },
  { to: "", icon: "x-icon" },
];
</script>

<style scoped></style>
