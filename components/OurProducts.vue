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
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { productsData: products } = useHomeState();
</script>
