<template>
  <div
    id="our-services"
    class="pt-6 bg-gradient-to-tr from-purple-500    to-purple-900 lg:pb-28  pb-10"
  >
    <UiTitle title="خدماتنا" class="mb-8 text-white before:bg-white" />
    <swiper-wrapper
      ref="swiperRef"
      class="px-0 mx-0     "
      :items="[1, 2, 3, 4]"
      :options="{ swiperOptions }"
      dir="rtl"
      @slide-change="onSlideChange"
    >
      <template #default="">
      <div class="   container flex lg:justify-between   mt-11  lg:flex-row flex-col-reverse items-center      gap-8  lg:items-center   pb-6"
        >
          <div class=" relative lg:max-w-[941px] pb-20 space-y-2">
            <h3 class="text-2xl text-white font-bold md:text-xl">
              معدات المطبخ المركزي
            </h3>
            <p class="mt-4 lg:text-lg text-sm leading-loose text-white">
              نوفر لك أحدث معدات المطابخ المركزية المصممة لتلبية احتياجات
              المطاعم، الفنادق، شركات التموين، والمطابخ السحابية. نقدم حلولًا
              متكاملة تشمل تجهيزات الطهي، التبريد، التخزين، وأدوات التحضير، مع
              ضمان الجودة والكفاءة العالية. سواء كنت تؤسس مطبخًا جديدًا أو تطور
              منشأتك الحالية، نوفر لك المعدات المناسبة بأفضل المعايير العالمية،
              مع خدمات التركيب والصيانة لضمان تشغيل سلس وفعال. اجعل مطبخك مجهزًا
              بأحدث التقنيات لتحقيق أعلى مستويات الإنتاجية والجودة!
            </p>
            <div
              class="py-10 flex justify-center arrows -bottom-10 absolute z-10 items-start space-x-4 rtl:space-x-reverse"
            >
              <button
                @click="goToPrev"
                :class="{
                  'bg-white text-purple-500': activeButton === 'prev',
                  'bg-transparent text-white': activeButton !== 'prev',
                }"
                class="border-2 border-white size-10 flex justify-center items-center rounded-full disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
              >
                <svg-icon name="arrow-right" class="text-current" />
              </button>

              <button
                @click="goToNext"
                :class="{
                  'bg-white text-purple-500': activeButton === 'next',
                  'bg-transparent text-white': activeButton !== 'next',
                }"
                class="border-2 border-white size-10 flex justify-center items-center rounded-full disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
              >
                <svg-icon name="arrow-right" class="text-current rotate-180" />
              </button>
            </div>
          </div>
            <img src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop" alt="service" class="  lg:size-[380px]  size-[320px]  lg:shrink-0   border-8  border-white  object-cover  rounded-full  " loading="lazy">
        </div>
      </template>
    </swiper-wrapper>
  </div>
</template>

<script setup lang="ts">
const swiperRef = ref();



const goToNext = () => {
  swiperRef.value?.next();
};

const goToPrev = () => {
  swiperRef.value?.prev();
};


</script>