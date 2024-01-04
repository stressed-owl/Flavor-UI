<template>
  <main>
      <div>
          <home-carousel :recipes="carouselRecipes"/>
          <categories-list />
          <subscribe-inbox />
      </div>
  </main>
</template>

<script setup lang="ts">
import { useFoodStore } from "@/store/store";
import { onMounted } from "vue";
import HomeCarousel from "@/pages/home/carousel/HomeCarousel.vue";
import CategoriesList from "@/pages/home/categories/CategoriesList.vue";
import SubscribeInbox from "@/pages/home/subscribe/SubscribeInbox.vue";

const store = useFoodStore();

onMounted(() => {
  store.fetchSpoonRecipes();
});

const carouselRecipes = store.spoonRecipes.slice(0, 3);

</script>
