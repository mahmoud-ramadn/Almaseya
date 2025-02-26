<template>
  <div
    id="our-services"
    class="pt-6 bg-gradient-to-tr from-purple-500 to-purple-900"
  >
    <UiTitle title="خدماتنا" class="mb-8 text-white before:bg-white" />
    <swiper-wrapper
      ref="swiperRef"
      class="px-0 mx-0"
      :items="[1, 2, 3, 4]"
      :options="{ pagination: false }"
      dir="rtl"
      @slide-change="onSlideChange"
      :arrows="false"
    >
      <template #default="">
        <div
          class="flex lg:justify-between lg:flex-row flex-col items-center overflow-hidden gap-10 h-[770px] pb-6"
        >
          <div class="max-w-[941px] relative lg:pr-32 pr-4 pb-16 space-y-2">
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
          <div class="   absolute -left-[224px] top-1/2 -translate-y-1/2    bg-blue-500  border-4 border-white size-[540px] rounded-full flex items-center justify-center"
          >
            <span
              class="size-[150px] absolute border-4 border-white  rounded-full"
              style="transform: rotate(0deg) translate(270px) rotate(0deg)"
            >
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="image"
                class="w-full h-full object-cover rounded-full"
              />
            </span>
            <span
              class="size-[150px] absolute border-4 border-white  rounded-full"
              style="transform: rotate(72deg) translate(270px) rotate(-72deg)"
            >
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="image"
                class="w-full h-full object-cover rounded-full"
              />
            </span>
            <span
              class="size-[150px] absolute border-4 border-white  rounded-full"
              style="transform: rotate(144deg) translate(270px) rotate(-144deg)"
            >
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="image"
                class="w-full h-full object-cover rounded-full"
              />
            </span>
            <span
              class="size-[150px] absolute border-4 border-white rounded-full"
              style="transform: rotate(216deg) translate(270px) rotate(-216deg)"
            >
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="image"
                class="w-full h-full object-cover rounded-full"
              />
            </span>
            <span
              class="size-[150px] absolute border-4 border-white  rounded-full"
              style="transform: rotate(288deg) translate(270px) rotate(-288deg)"
            >
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="image"
                class="w-full h-full object-cover rounded-full"
              />
            </span>
            <span
              class="size-[320px] absolute border-4 border-white rounded-full overflow-hidden"
              style="transform: rotate(0deg) translate(270px) rotate(0deg)"
            >
              <img
                src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="image"
                class="w-full h-full object-cover rounded-full"
              />
            </span>
          </div>
        </div>
      </template>
    </swiper-wrapper>
  </div>
</template>

<script setup lang="ts">
const swiperRef = ref();
const activeButton = ref<"prev" | "next" | null>(null);
const activeIndex = ref(0); 

const goToNext = () => {
  swiperRef.value?.next();
};

const goToPrev = () => {
  swiperRef.value?.prev();
};

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.activeIndex; 

  if (swiper.isBeginning) {
    activeButton.value = "prev";
  } else if (swiper.isEnd) {
    activeButton.value = "next";
  } else {
    activeButton.value = null;
  }
};
</script>
