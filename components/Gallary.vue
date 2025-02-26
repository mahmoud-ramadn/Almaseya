<template>
  <div id="gallary-card" class="container lg:px-0 px-4 mb-32">
    <ui-title title="معرض الصور" />
    <div class="flex justify-center flex-wrap space-x-4 rtl:space-x-reverse pt-6 pb-20">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="[
          'px-4 py-2 rounded-lg transition-all',
          activeTab === index
            ? 'text-purple-900 lg:font-semibold lg:text-lg text-xs'
            : 'text-gray-300 lg:font-semibold lg:text-lg text-xs',
        ]"
      >
        {{ tab.name }}
      </button>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 overflow-hidden"
    >
      <div
        v-for="(image, index) in currentTabImages"
        :key="image"
        class="relative overflow-hidden rounded-lg bg-black h-[282px]"
      >
        <img
          :src="image"
          :alt="'Gallery image ' + (index + 1)"
          class="w-full h-full object-cover transition-transform hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
    <div class="flex justify-center items-center space-x-4 rtl:space-x-reverse">
      <button
        @click="prevTab"
        :disabled="activeTab === 0"
        class="border-2 border-purple-500 size-10 flex justify-center items-center rounded-full disabled:bg-purple-500 disabled:text-white text-purple-500 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
      >
        <svg-icon name="arrow-right" class="text-current" />
      </button>

      <button
        @click="nextTab"
        :disabled="activeTab >= tabs.length - 1"
        class="border-2 border-purple-500 size-10 flex justify-center items-center rounded-full disabled:bg-purple-500 disabled:text-white text-purple-500 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
      >
        <svg-icon name="arrow-right" class="text-current rotate-180" />
      </button>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref(0);
const tabs = [
  {
    name: "منتجات مواد مجمدة",
    images: [
      "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    name: "منتجات الألبان",
    images: [
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    name: "المشروبات",
    images: [
      "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    name: "المعلبات",
    images: [
      "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const currentTabImages = computed(() => tabs[activeTab.value].images);
const changeTab = (index) => {
  activeTab.value = index;
};

const nextTab = () => {
  if (activeTab.value < tabs.length - 1) {
    activeTab.value++;
  }
};

const prevTab = () => {
  if (activeTab.value > 0) {
    activeTab.value--;
  }
};
</script>

<style scoped></style>
