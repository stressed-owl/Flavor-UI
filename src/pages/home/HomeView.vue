<template>
  <main>
      <div>
          <home-carousel :recipes="carouselRecipes"/>
          <categories-list />
          <learn-more />
          <subscribe-inbox />
      </div>
  </main>
</template>

<script setup lang="ts">
import { useFoodStore } from "@/store/store";
import { onMounted } from "vue";
import HomeCarousel from "@/pages/home/carousel/HomeCarousel.vue";
import CategoriesList from "@/pages/home/categoriesList/CategoriesList.vue";
import SubscribeInbox from "@/pages/home/subscribe/SubscribeInbox.vue";
import LearnMore from "./learnMore/LearnMore.vue";

const store = useFoodStore();

onMounted(() => {
  store.fetchSpoonRecipes();
});

const carouselRecipes = store.spoonRecipes.slice(0, 3);

</script>
