<template>
  <div
    id="our-services"
    class="pt-6 relative bg-gradient-to-tr from-purple-500 to-purple-900 lg:pb-28 pb-10"
  >
    <UiTitle title="خدماتنا" class="mb-8 text-white before:bg-white" />
    <div
      class="flex gap-x-5 lg:bottom-[7rem] left-1/2 -translate-x-1/2 md:bottom-[5rem] bottom-[4rem] absolute z-50"
    >
      <button
        class="border-2 border-white hover:bg-white hover:text-purple-500 text-white size-10 flex justify-center items-center rounded-full transition-colors"
        @click="goToPrev"
      >
        <svg-icon name="arrow-right" class="text-current" />
      </button>

      <button
        class="border-2 border-white hover:bg-white hover:text-purple-500 text-white size-10 flex justify-center items-center rounded-full disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
        @click="goToNext"
      >
        <svg-icon name="arrow-right" class="text-current rotate-180" />
      </button>
    </div>

    <swiper-wrapper
      ref="swiperRef"
      class="px-0 mx-0"
      :items="slideItems" dir="rtl"
    >
      <template #default="">
        <div
          class="container flex lg:justify-between mt-11 lg:flex-row flex-col-reverse items-center gap-11 lg:items-center pb-6"
        >
          <div
            class="relative lg:max-w-[941px] lg:text-start text-center pb-20 space-y-2"
          >
            <h3 class="md:text-2xl text-white font-bold text-lg">
              معدات المطبخ المركزي
            </h3>
            <p class="lg:text-lg font-medium leading-loose mt-4 text-white">
              نوفر لك أحدث معدات المطابخ المركزية المصممة لتلبية احتياجات
              المطاعم، الفنادق، شركات التموين، والمطابخ السحابية. نقدم حلولًا
              متكاملة تشمل تجهيزات الطهي، التبريد، التخزين، وأدوات التحضير، مع
              ضمان الجودة والكفاءة العالية. سواء كنت تؤسس مطبخًا جديدًا أو تطور
              منشأتك الحالية، نوفر لك المعدات المناسبة بأفضل المعايير العالمية،
              مع خدمات التركيب والصيانة لضمان تشغيل سلس وفعال. اجعل مطبخك مجهزًا
              بأحدث التقنيات لتحقيق أعلى مستويات الإنتاجية والجودة!
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop"
            alt="service"
            class="lg:size-[380px] size-[210px] lg:shrink-0 md:border-8 border-4 border-white object-cover rounded-full"
            loading="lazy"
          />
        </div>
      </template>
    </swiper-wrapper>
  </div>
</template>

<script setup lang="ts">
const swiperRef = ref();

const slideItems = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
  { id: 4, content: 'Slide 4' },
];

const goToNext = () => {
  swiperRef.value?.next();
};

const goToPrev = () => {
  swiperRef.value?.prev();
};
</script>
