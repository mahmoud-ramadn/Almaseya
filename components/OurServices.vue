<template>
  <div
    id="our-services"
    class="pt-6  bg-gradient-to-tr from-purple-500 to-purple-900"
  >
    <UiTitle title="خدماتنا" class="mb-8 text-white before:bg-white" />
    <swiper-wrapper
      class="px-0 mx-0 "
      :items="[1, 2, 3, 4]"
      :options="{ pagination: false, }"
      dir="rtl"
      :arrows="true"
    >
      <template #default="">
        <div
          class="flex relative lg:justify-between lg:flex-row flex-col items-center gap-10"
        >
          <div class="max-w-[941px] lg:pr-32 pr-4 space-y-2">
            <h3 class="text-2xl text-white font-bold md:text-xl">
              معدات المطبخ المركزي
            </h3>
            <p class="mt-4   lg:text-lg text-sm leading-loose text-white">
              نوفر لك أحدث معدات المطابخ المركزية المصممة لتلبية احتياجات
              المطاعم، الفنادق، شركات التموين، والمطابخ السحابية. نقدم حلولًا
              متكاملة تشمل تجهيزات الطهي، التبريد، التخزين، وأدوات التحضير، مع
              ضمان الجودة والكفاءة العالية. سواء كنت تؤسس مطبخًا جديدًا أو تطور
              منشأتك الحالية، نوفر لك المعدات المناسبة بأفضل المعايير العالمية،
              مع خدمات التركيب والصيانة لضمان تشغيل سلس وفعال. اجعل مطبخك مجهزًا
              بأحدث التقنيات لتحقيق أعلى مستويات الإنتاجية والجودة!
            </p>
          </div>
          <div class="flex justify-end w-full">
            <img
              src="../assets/images/OurSevice.webp"
              class="object-cover"
              alt="cirlce"
            />
          </div>
        </div>
      </template>
    </swiper-wrapper>
  </div>
</template>

<style  lang="postcss">

</style>