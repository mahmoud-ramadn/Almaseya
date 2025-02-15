<template>
  <section
    class="relative bg-[url('@/assets/images/hero.webp')] w-full bg-no-repeat bg-cover lg:pb-48 pt-6 after:absolute after:bg-black/70 after:left-0 after:top-0 after:w-full after:h-full after:content-[''] after:z-[1]"
  >
    <div
      class="container flex flex-col lg:flex-row lg:justify-start gap-x-6 justify-between items-center relative z-10"
    >
      <img
        src="@/assets/images/logo.webp"
        alt="Company Logo"
        class="w-fit max-w-[200px] lg:max-w-[250px] mb-4 lg:mb-0"
      />
      <div class="relative lg:mr-52 lg:max-w-[364px] min-w-48 mt-4 w-full">
        <input
          type="text"
          class="h-11 w-full rounded-full bg-transparent border pr-4 border-white placeholder:font-medium placeholder:text-gray-500"
          placeholder="بحث"
          aria-label="Search"
        />
        <span
          class="w-16 h-8 rounded-full bg-blue-600 absolute flex items-center justify-center text-white left-2 top-1/2 -translate-y-1/2"
        >
          <svg-icon name="search" class="size-6 fill-white" />
        </span>
      </div>
    </div>

    <div class="relative z-10 text-center mt-32 px-4">
      <h1 class="font-bold lg:text-5xl text-3xl text-white">
        ريادة في صناعة التبريد والتكييف بخبرة عالمية
      </h1>
      <p class="font-bold lg:text-2xl text-lg text-white lg:py-10 py-4">
        جودة عالمية بخبرة 30 عامًا في تصنيع الثلاجات، غرف التبريد، والتكييف
      </p>
      <button
        class="text-blue-600 text-base my-10 rounded-lg bg-white font-semibold py-4 px-8"
        aria-label="تواصل معنا الان"
      >
        تواصل معنا الان
      </button>
    </div>
  </section>
</template>
