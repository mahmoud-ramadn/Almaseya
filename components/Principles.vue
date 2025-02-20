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
  <section class="py-12 pb-12  bg-gray-200">
    <ui-title title="المبادئ" />
    <div class="text-center       grid  lg:grid-cols-4 grid-cols-1   gap-y-10  mt-8   mx-0   p-0 h-full    "
    >
    <div class=" lg:col-span-2   col-span-1    relative   flex justify-center items-center     pr-[25%]  py-8   lg:h-[475px] md:h-[400px] h-[380px] ">
      <div
        class="bg-[url('@/assets/images/market.webp')]   bg-no-repeat bg-cover  absolute right-0  z-10   top-0   lg:w-[65%]   md:w-[70%]    w-[90%]   bg-center  py-16  h-full    "
      >
    </div>
    <img
       src="@/assets/images/principles.webp"
       alt="Principles Illustration"
       class="border-r-[10px] border-white  w-full  border-b-[9px] rounded-2xl  object-cover aspect-[3/4]  z-10    h-full "
     />
    </div>
       <div class="    lg:col-span-2 col-span-1 lg:flex-row flex-col     gap-y-6  justify-end     w-full flex items-center  h-full  px-4 ">
        <div class="  space-y-7   lg:max-w-[273px] w-full ">
          <princple-item
            v-for="(principle, index) in principles.slice(0, 3)"
            :key="index"
            :text="principle"
          />
        </div>
        <div class="  space-y-7  lg:max-w-[273px]  w-full ">
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


