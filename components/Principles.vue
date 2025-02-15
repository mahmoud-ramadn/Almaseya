<script setup lang="ts">
const principles = [
  "التواصل الفعال",
  " الشراكة مع العميل",
  "المهنية والاحتراف بالعمل",
  " الجودة والمهارة في التنفيذ",
  " الالتزام والدقة في التسليم",
  "الثقة المتبادلة",
];
</script>

<template>
  <section class="py-12 pb-12 bg-gray-200">
    <ui-title title="المبادئ" />

    <div
      class="text-center flex lg:flex-row flex-col mt-24 justify-end lg:items-center gap-y-10 items-start"
    >
      <div
        class="relative lg:pr-[108px] pr-20 lg:h-[476px] py-5 sm:h-2/4 w-full flex items-center"
      >
        <img
          src="@/assets/images/principles.webp"
          alt="Principles Illustration"
          class="border-r-[10px] border-white border-b-[9px] rounded-2xl relative z-10 h-fit"
        />
        <div
          class="bg-[url('@/assets/images/market.webp')] absolute right-0 top-1/2 -translate-y-1/2 bg-no-repeat bg-cover lg:w-[437px] w-[300px] h-full"
        ></div>
      </div>

      <div class="container flex justify-center items-center   flex-wrap  gap-6">
        <div class="   space-y-7  lg:max-w-[273px] w-full ">
          <princple-item
            v-for="(principle, index) in principles.slice(0, 3)"
            :key="index"
            :text="principle"
          />
        </div>
        <div class="   space-y-7   lg:max-w-[273px]  w-full ">
          <princple-item
            v-for="(principle, index) in principles.slice(3)"
            :key="index + 3"
            :text="principle"
          />
        </div>
      </div>
    </div>
  </section>
</template>
