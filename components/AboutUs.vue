<template>
  <section
    id="about-us"
    class="bg-[url('@/assets/images/background.webp')] w-full pt-16 px-4 relative bg-no-repeat bg-cover"
  >
    <a
      href="https://wa.me/966000000000"
      class="lg:block hidden lg:fixed z-10 cursor-pointer left-8 bottom-52 bg-green-500 rounded-full p-3 shadow-md"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg-icon name="whatsapp" class="size-10" />
    </a>

    <div
      class="container grid lg:grid-cols-[1fr,282px,] md:grid-cols-2 grid-cols-1 gap-6 px-0"
    >
      <div class="relative flex justify-end lg:max-h-[509px]">
        <div
          class="absolute text-white lg:max-w-[687px] lg:left-[186px] md::mx-auto left-4    lg:p-7  p-4  gap-5  right-4 z-10  h-fit flex flex-col justify-center items-start top-1/2 -translate-y-1/2 rounded-2xl bg-purple-900/80 backdrop-blur-md "
        >
          <h2
            class="text-xl lg:text-2xl font-bold  relative after:absolute after:w-[80%] after:right-0 after:bottom-0 pb-5 after:bg-white after:rounded-2xl after:py-1"
          >
            من نحن
          </h2>
          <p
            class=" text-sm lg:text-lg sm:text-lg leading-relaxed font-medium  "
          >
            نحن مصنع متخصص لانواع الثلاجات من مبردات وثلاجات عرض السوبرماركت
            وغرف التبريد والتجميد واللحوم وثلاجات المواني واجهزة تنقية الهواء
            واعمال التكيف والتكييف. يقع المصنع في هيئة المدن الصناعية بخميس مشيط
            على مساحة 11000 م احدى عشر الف متر . وتوجد لنا تنافس المنتجات
            الاوربية والامريكية وخبرة بعض موظفينا تتجاوز الثلاثين سنة.
          </p>
          <h2
            class="text-xl lg:text-2xl font-bold  relative after:absolute after:w-[80%] after:right-0 after:bottom-0 lg:pb-5 pb-4 after:bg-white after:rounded-2xl after:py-1"
          >
            رؤيتنا
          </h2>
          <p
            class="text-sm lg:text-lg sm:text-lg leading-relaxed font-medium px-4"
          >
            أن نكون المصنع الأول في العالم العربي في التبريد واجهزة تنقية الهواء
            بأعلى معايير الجودة والتميز
          </p>
        </div>
        <img
          src="@/assets/images/Rectangle 17.webp"
          alt="rectangle"
          class="h-full w-full rounded-2xl object-cover lg:max-w-[333px]"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col gap-4 lg:max-h-[509px] overflow-hidden">
        <div
          class="basis-3/4 rounded-2xl overflow-hidden relative after:absolute after:w-full after:h-full after:bg-purple-900/70 after:left-0 after:top-0"
        >
          <img
            src="@/assets/images/Rectangle 19.webp"
            alt="rectangle"
            class="h-full w-full aspect-auto object-cover"
          />
          <video-player />
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
    <div
      class="flex lg:flex-row text-purple-500 flex-col justify-center py-12 gap-20"
    >
      <div class="text-center">
        <h1 class="font-bold fill-current text-7xl leading-relaxed">+14</h1>
        <p class="font-medium fill-current">دولة متواجدين فيها</p>
      </div>
      <div
        class="text-center relative px-20 lg:after:absolute after:h-[134px] after:w-[1px] after:bg-purple-500 after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 lg:before:absolute before:h-[134px] before:w-[1px] before:bg-purple-500 before:content-[''] before:right-0 before:top-1/2 before:-translate-y-1/2"
      >
        <h1 class="font-bold text-7xl leading-relaxed">+1500</h1>
        <p class="font-medium">مشروع تم العمل عليه</p>
      </div>
      <div class="text-center">
        <h1 class="font-bold fill-current text-7xl leading-relaxed">30</h1>
        <p class="font-medium fill-current">سنة خبره في المجال</p>
      </div>
    </div>
    <div
      @click="scrollToNextSection"
      class="fixed cursor-pointer right-11 top-[84%] circle outline-t-2 z-50 outline-offset-4 flex items-center justify-center md:flex hidden outline-purple-900 outline-dashed bg-purple-900 items-center justify-center"
    >
      <img src="@/assets/icons/svg/arrowdown.svg" alt="arrow" class="size-6" />
    </div>
  </section>
</template>

<script lang="ts" setup>
function scrollToNextSection() {
  const nextSection = document.getElementById("next-section");
  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
.circle {
  width: 57px;
  height: 77px;
  border-radius: 50%;
}
</style>
