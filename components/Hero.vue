<template>
  <section
    class="relative bg-[url('@/assets/images/hero.webp')] w-full bg-no-repeat bg-cover lg:pb-48 pt-6 after:absolute after:bg-gradient-purple after:left-0 after:top-0 after:w-full after:h-full after:content-[''] after:z-[1]"
  >
  <NavigationBar/>

  <div class="relative z-10 text-center mt-32 px-4">
      <h1 class="font-bold lg:text-5xl text-3xl text-white">
        ريادة في صناعة التبريد والتكييف بخبرة عالمية
      </h1>
      <p class="font-bold lg:text-2xl text-lg text-white lg:py-10 py-4">
        جودة عالمية بخبرة 30 عامًا في تصنيع الثلاجات، غرف التبريد، والتكييف
      </p>
      <button
        class=" text-purple-900  cursor-pointer text-base my-10 rounded-lg bg-white font-semibold py-4 px-8"
            @click="scrollToNextSection"
      >
        تواصل معنا الان
      </button>
    </div>
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