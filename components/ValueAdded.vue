<template>
  <section id="value-added"  class="lg:max-w-[1288px] w-full mx-auto   px-4  md:py-16 pt-12 pb-20 lg:py-32">
    <ui-title title="القيمة المضافة" />
    <div
      class=" grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2  grid-rows-2   md:gap-x-[135px] gap-x-6 gap-y-12 justify-center  items-center   mt-24"
    >
      <div
        v-for="(item, index) in valudeAddeData"
        :key="index"
        class="     self-center   text-center space-y-4 "
      >
        <SvgIcon :name="item.icon" class="size-10 fill-purple-900   mx-auto" />
        <p class=" font-medium text-base lg:text-lg">
          {{ item.title }}
        </p>
      </div>
    </div>



    
  </section>
</template>

<script setup lang="ts">
const valudeAddeData = [
  { icon: "convert-3d-cube", title: "خدمة ما بعد البيع" },
  { icon: "maximize", title: "جميع المقاسات حسب الديكور والمكان" },
  { icon: "verify", title: "الضمان" },
  { icon: "box-tick", title: "الجودة والصيانة" },
  { icon: "truck-tick", title: "إمكانية التصدير للخارج" },
  { icon: "medal-star", title: "خبرة الكادر العريقة السرية" },
  { icon: "courthouse", title: "مصنع معتمد لدى وزارات وجامعات" },
  { icon: "export", title: "إمكانية التنفيذ في جميع أنحاء المملكة" },
];
</script>
