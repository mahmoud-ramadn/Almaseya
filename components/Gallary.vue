<template>
  <section id="gallary-card" class="container px-3 md:mb-32 mb-20">
    <ui-title title="معرض الصور" />
    <div class="flex justify-center flex-wrap space-x-4 rtl:space-x-reverse pt-6 pb-20">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="[
          'px-4 py-2 rounded-lg transition-all',
          activeTab === index
            ? 'text-purple-900 lg:font-semibold lg:text-lg'
            : 'text-gray-300 lg:font-semibold lg:text-lg',
        ]"
      >
        {{ tab.name }}
      </button>
    </div>
    <div>
      <swiper-wrapper
        ref="swiperRef"
        :items="tabs"
        :options="swiperOptions"
        :arrows="true"
        @slide-change="onSlideChange" 
      >
        <template #default="{ item }">
          <GallaryGrid :images="getImagesForTab(item)" />
        </template>
      </swiper-wrapper>
    </div>
  </section>
</template>


<script setup lang="ts">

const activeTab = ref(0);
const swiperRef = ref(null);

const swiperOptions = {
  autoplay: {
    delay: 4000,
  },
  loop: true,
  breakpoints: {
    2500: {
      slidesPerView: 1,
      spaceBetween: 16,
      
    },
    1081: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
  },
  pagination: false,
};

const tabs = [
  { name: "منتجات مواد مجمدة", id: 1 },
  { name: "منتجات الألبان", id: 2 },
  { name: "المشروبات", id: 3 },
  { name: "المعلبات", id: 4 },
];

const imagesByTab = {
  1: [
    "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",

  ],
  2: [
    "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
  3: [
    "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
  4: [
    "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553530979-8aa8c7b4e706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
};

const getImagesForTab = (tab) => {
  return imagesByTab[tab.id] || [];
};

const changeTab = (index) => {
  activeTab.value = index;
  swiperRef.value?.slideTo(index);
};

const onSlideChange = (realIndex) => {
  activeTab.value = realIndex;
};
</script>