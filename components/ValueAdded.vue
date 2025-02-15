<template>
  <section class="lg:max-w-[1257px] w-full mx-auto   px-4  py-16 lg:py-32">
    <ui-title title="القيمة المضافة" />
    <div
      class="flex gap-x-[135px] gap-y-12 justify-center  items-center md:flex-row flex-col flex-wrap mt-24"
    >
      <div
        v-for="(item, index) in valudeAddeData"
        :key="index"
        class=" max-w-[213px]  text-center space-y-4 "
      >
        <SvgIcon :name="item.icon" class="size-10 fill-blue-500 mx-auto" />
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
