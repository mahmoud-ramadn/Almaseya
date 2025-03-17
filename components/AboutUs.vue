<template>
  <section
    id="about-us"
    class="bg-[url('@/assets/images/background.webp')] w-full pt-16 pb-12 px-4 relative bg-no-repeat bg-cover"
  >
    <a
      href="https://wa.me/+966505743306"
      class="block fixed cursor-pointer z-50 md:left-8 left-4 md:bottom-52 bottom-12 bg-green-500 rounded-full p-3 shadow-md"
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
          class="absolute text-white lg:max-w-[687px] lg:left-[186px] md::mx-auto left-4 lg:p-7 p-4 gap-5 right-4 z-10 sm:h-fit h-[96%] flex flex-col justify-center items-start top-1/2 -translate-y-1/2 rounded-2xl bg-purple-900/80 backdrop-blur-md"
        >
          <h2
            class="text-xl lg:text-2xl font-bold relative after:absolute after:w-[80%] after:right-0 after:bottom-0 pb-5 after:bg-white after:rounded-2xl after:py-1"
          >
            من نحن
          </h2>
          <p class="text-sm lg:text-lg leading-relaxed font-medium">
            نحن مصنع مختص بأنواع الثلاجات من فريزرات وثلاجات عرض للسوبرماركت
            وغرف التبريد والتجميد واللحوم وثلاجات الموتى وأجهزة تنقية الهواء
            وأعمال الدكت والتكييف. يقع المصنع في هيئة المدن الصناعية بخميس مشيط
            على مساحة 11000 م أحدى عشر ألف متر . وجودتنا تنافس المنتجات الأوربية
            والأمريكية وخبرة بعض موظفينا تتجاوز الثلاثين سنة.
          </p>
          <h2
            class="text-xl lg:text-2xl font-bold relative after:absolute after:w-[80%] after:right-0 after:bottom-0 lg:pb-5 pb-4 after:bg-white after:rounded-2xl after:py-1"
          >
            رؤيتنا
          </h2>
          <p class="text-sm lg:text-lg leading-relaxed font-medium px-4">
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

    <about-us-counter />
    <div
      @click="scrollToNextSection"
      class="absolute cursor-pointer md:right-11 right-4 md:top-[84%] -bottom-[1.75rem] circle outline-t-2 z-50 outline-offset-4 flex items-center justify-center md:flex outline-purple-900 outline-dashed bg-purple-900 items-center justify-center"
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
