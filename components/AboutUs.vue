<template>
  <section
    class="bg-[url('@/assets/images/background.webp')] w-full pt-16 px-4 bg-no-repeat bg-cover"
  >
    <div
      class="container grid lg:grid-cols-[1fr,282px,] md:grid-cols-2 grid-cols-1 gap-6 px-0"
    >
      <div class="relative flex justify-end lg:max-h-[509px] overflow-hidden">
        <div
          class="absolute text-white lg:max-w-[687px] lg:left-[186px] z-10 overflow-hidden lg:h-[440px] h-fit top-1/2 -translate-y-1/2 rounded-2xl bg-blue-600/75 backdrop-blur-md p-6"
        >
          <h2 class="text-xl lg:text-2xl font-bold mb-4">من نحن</h2>
          <p class="text-sm lg:text-lg leading-relaxed mb-8">
            نحن مصنع متخصص لانواع الثلاجات من مبردات وثلاجات عرض السوبرماركت
            وغرف التبريد والتجميد واللحوم وثلاجات المواني واجهزة تنقية الهواء
            واعمال التكيف والتكييف. يقع المصنع في هيئة المدن الصناعية بخميس مشيط
            على مساحة 11000 م احدى عشر الف متر . وتوجد لنا تنافس المنتجات
            الاوربية والامريكية وخبرة بعض موظفينا تتجاوز الثلاثين سنة.
          </p>
          <h2 class="text-xl lg:text-2xl font-bold mb-4">رؤيتنا</h2>
          <p class="text-sm lg:text-lg leading-relaxed">
            أن نكون المصنع الأول في العالم العربي في التبريد واجهزة تنقية الهواء
            بأعلى معايير الجودة والتميز
          </p>
        </div>

        <img
          src="@/assets/images/Rectangle 17.webp"
          alt="rectangle"
          class="h-full w-full rounded-2xl object-cover lg:max-w-[333px]"
        />
      </div>

      <div class="flex flex-col gap-4 lg:max-h-[509px] overflow-hidden">
        <div class="basis-3/4 rounded-2xl overflow-hidden">
          <img
            src="@/assets/images/Rectangle 19.webp"
            alt="rectangle"
            class="h-full w-full aspect-auto object-cover"
          />
        </div>
        <div class="basis-1/4 rounded-2xl overflow-hidden">
          <img
            src="@/assets/images/Rectangle 18.webp"
            alt="rectangle"
            class="h-full w-full aspect-auto object-cover"
          />
        </div>
      </div>
    </div>
    <div class="flex lg:flex-row flex-col justify-center py-12 gap-20">
      <div class="text-center">
        <h1 class="font-bold text-blue-500 text-7xl leading-relaxed">+14</h1>
        <p class="font-medium text-blue-500">دولة متواجدين فيها</p>
      </div>
      <div
        class="text-center relative px-20 lg:after:absolute after:h-[134px] after:w-[1px] after:bg-blue-500 after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 lg:before:absolute before:h-[134px] before:w-[1px] before:bg-blue-500 before:content-[''] before:right-0 before:top-1/2 before:-translate-y-1/2"
      >
        <h1 class="font-bold text-blue-500 text-7xl leading-relaxed">+1500</h1>
        <p class="font-medium text-blue-500">مشروع تم العمل عليه</p>
      </div>
      <div class="text-center">
        <h1 class="font-bold text-blue-500 text-7xl leading-relaxed">30</h1>
        <p class="font-medium text-blue-500">سنة خبره في المجال</p>
      </div>
    </div>
    <span
      @click="scrollToNextSection"
      class="fixed border-orange-400 cursor-pointer right-11 top-[84%] w-[77px] outline-t outline-2 z-50 outline-offset-4  md:flex hidden outline-blue-500 outline-dashed bg-blue-600 rounded-full h-[77px]  items-center justify-center"
    >
      <img src="@/assets/icons/svg/arrowdown.svg" alt="arrow" class="size-6" />
    </span>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToNextSection() {
      const nextSection = document.getElementById("next-section");
      if (nextSection) {
        window.scrollTo({
          top: nextSection.offsetTop,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
