<template>
  <main>
    <category-options></category-options>
    <recipe-list class="flex justify-center" :foods="store.spoonRecipes"></recipe-list>
  </main>
</template>

<script setup lang="ts">
import RecipeList from "@/components/recipeList/RecipeList.vue";
import { useFoodStore } from "@/store/store";
import { onBeforeMount } from "vue";
import CategoryOptions from "@/components/categories/CategoryOptions.vue";

const store = useFoodStore();

onBeforeMount(() => {
  store.fetchSpoonRecipes();
});
</script>
