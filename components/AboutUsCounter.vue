<template>
  <div
    ref="container"
    class="container grid lg:grid-cols-3 md:grid-cols-4 grid-cols-4 lg:mt-12 mt-6 pt-6 text-purple-500 md:gap-20 gap-8 relative pb-4 after:bg-purple-500 after:top-0 after:left-1/2 after:-translate-x-1/2 lg:after:hidden after:absolute md:after:h-[110px] after:h-[92px] after:w-[0.5px]"
  >
    <div
      class="lg:col-span-1 md:col-span-2 col-span-2 lg:border-none border-b border-purple-500 pb-4 text-center"
    >
      <h1
        class="font-semibold fill-current md:text-7xl text-3xl leading-relaxed"
      >
        +<span class="counter">{{ animatedCounters.country }}</span>
      </h1>
      <p class="font-medium fill-current">دولة متواجدين فيها</p>
    </div>

    <div
      class="lg:col-span-1 md:col-span-2 col-span-2 text-center relative lg:border-none border-b border-purple-500 pb-4 lg:after:absolute after:h-[134px] after:w-[1px] after:bg-purple-500 after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 lg:before:absolute before:h-[134px] before:w-[1px] before:bg-purple-500 before:content-[''] before:right-0 before:top-1/2 before:-translate-y-1/2"
    >
      <h1 class="font-semibold md:text-7xl text-3xl leading-relaxed">
        +<span class="counter">{{ animatedCounters.projects }}</span>
      </h1>
      <p class="font-medium">مشروع تم العمل عليه</p>
    </div>

    <div class="lg:col-span-1 md:col-span-4 col-span-4 text-center">
      <h1
        class="font-semibold fill-current md:text-7xl text-3xl leading-relaxed"
      >
        <span class="counter">{{ animatedCounters.experience }}</span>
      </h1>
      <p class="font-medium fill-current">سنة خبره في المجال</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const finalValues = {
  country: 14,
  projects: 1500,
  experience: 30,
};

const animatedCounters = ref({
  country: 1,
  projects: 1,
  experience: 1,
});

const container = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

const animateCounters = () => {
  const duration = 2200;
  const startTime = performance.now();

  const step = (timestamp: number) => {
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);

    animatedCounters.value.country = Math.floor(finalValues.country * percentage);
    animatedCounters.value.projects = Math.floor(finalValues.projects * percentage);
    animatedCounters.value.experience = Math.floor(finalValues.experience * percentage);

    if (percentage < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const initObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer?.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.5},
  );

  if (container.value) {
    observer.observe(container.value);
  }
};
onMounted(() => {
  initObserver();
});
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.counter {
  display: inline-block;
  animation: count-up 2s ease-out forwards;
}

@keyframes count-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
