<template>
  <section id="our-products" class="pt-16">
    <ui-title title="منتجاتنا" />
    <p class="font-medium text-center mt-6">
      تتسم جميع منتجاتنا بجودة التصنيع ضمن الشروط والمعايير العالمية وبأيدي
      وخبرات مميزة ،صديقة للبيئة وتوفر الطاقة
    </p>
    <div
      class="mt-40 container mb-[120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-36 px-4"
    >
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "ثلاجات للعرض وحفظ اللحوم",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "غرف التبريد والتجميد بجميع الأنواع والمقاسات",
  },
  {
    name: "ثلاجات اللحوم",
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "غرف التبريد الخاصة لعرض المنتجات داخل الأسواق المركزية ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "الثلاجات والحافظات الخاصة بالمشافي",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "أعمال الدكت",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "ثلاجات فريزر استيل بجميع المقاسات",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "التكييف المركزي",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2832&auto=format&fit=crop",
    description: "ثلاجات الآيس كريم بجميع أنواعها",
  },
];
</script>
