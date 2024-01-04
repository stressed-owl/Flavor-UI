<template>
  <main>
      <div>
          <home-carousel :recipes="carouselRecipes"/>
      </div>
  </main>
</template>

<script setup lang="ts">
import { useFoodStore } from "@/store/store";
import { onMounted } from "vue";
import HomeCarousel from "@/pages/home/carousel/HomeCarousel.vue";

const store = useFoodStore();

onMounted(() => {
  store.fetchSpoonRecipes();
});

const carouselRecipes = store.spoonRecipes.slice(0, 3);

</script>
