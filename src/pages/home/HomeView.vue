<template>
  <main>
    <category-options @select-category="(selectedCategory) => selectedCategory = selectedCategory"></category-options>
    Selected Category: {{ selectedCategory }}
    <recipe-list :foods="store.spoonRecipes"></recipe-list>
    <div class="my-[100px] flex items-center justify-center gap-5">
      <PrimeButton label="Back"/>
      <PrimeButton label="Next"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import RecipeList from "@/components/recipeList/RecipeList.vue";
import { useFoodStore } from "@/store/store";
import { onBeforeMount, ref } from "vue";
import CategoryOptions from "@/components/categories/CategoryOptions.vue";

const store = useFoodStore();
const selectedCategory = ref();

onBeforeMount(() => {
  store.fetchSpoonRecipes();
});
</script>
