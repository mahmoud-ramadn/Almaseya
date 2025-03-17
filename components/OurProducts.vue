<template>
  <section id="our-products" class="pt-16 mb-20">
    <ui-title title="منتجاتنا" />
    <p class="font-medium text-center mt-6">
      تتسم جميع منتجاتنا بجودة التصنيع ضمن الشروط والمعايير العالمية وبأيدي
      وخبرات مميزة ،صديقة للبيئة وتوفر الطاقة
    </p>
    <div
      class="mt-40 container mb-[120px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-y-36 gap-y-6 px-4"
    >
      <product-card
        v-for="(product, index) in productData "
        :key="index"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const images: string[] = [];
for (let i = 1; i <= 28; i++) {
  images.push((await import(`../assets/images/productsimage/${i}.webp`)).default);
}
const productTitles = [
  "ثلاجة 1 باب رأسي تبريد",
  "ثلاجة 2 باب رأسي تبريد",
  "ثلاجة 2 باب رأسي تبريد",
  "ثلاجة 2 باب رأسي تبريد",
  "ثلاجة سلطات 3 باب",
  "ثلاجة عرض المشروبات الصغيرة عرض 60 سم",
  "ثلاجة عرض المشروبات عرض 65 سم",
  "ثلاجة عرض المشروبات عرض 75 سم",
  "ثلاجة عرض المشروبات عرض 100سم",
  "ثلاجة عرض المشروبات عرض 200 سم",
  "ثلاجة كاونتر ٢ باب ارتفاع ٩٠ سم",
  "ثلاجة كاونتر 2 درج صغير 122 سم",
  "ثلاجة كاونتر 3 باب ارتفاع 90",
  "ثلاجة كاونتر 4 درج صغير 185 سم",
  "ثلاجة كاونتر بيتزا 3 باب Pizza counter 3 doors",
  "ثلاجة كاونتر سلطات 1 باب",
  "ثلاجة كاونتر سلطات 2 باب",
  "ثلاجة كاونتر سلطات 3 باب",
  "ثلاجة كاونتر عرض مشاوي ٢ باب ارتفاع ٩٠ سم",
  "ثلاجة كاونتر عرض مشاوي 2 باب ارتفاع  90 سم",
  "ثلاجة كاونتر عرض مشاوي 2 باب ارتفاع 90 سم",
  "ثلاجة كاونتر عرض مشاوي 3 باب ارتفاع 90",
  "ثلاجة كاونتر عرض مشاوي 3 باب ارتفاع 90سم",
  "غرف التبريد cold room",
  "فلتر ٣ محطات الكتروستاتك",
  "فلتر 7 مراحل الكتروستاتك",
  "فلتر بمحطتين الكتروستاتك",
  "كاونتر سلطات 2 باب",
];

const productData: {
    title: string;
    image: string;
}[] = productTitles.map((product, index) => (
  {
  title: product,
  image: images[index % images.length],
}

));
</script>
