<template>
  <main>
    <category-options></category-options>
    <recipe-list :foods="allSpoonRecipe"></recipe-list>
    <div class="my-[100px] flex items-center justify-center gap-5">
      <PrimeButton label="Back" @click="page = page + 1"/>
      <PrimeButton label="Next" @click="page = page - 1"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import RecipeList from "@/components/recipeList/RecipeList.vue";
import { useFoodStore } from "@/store/store";
import { onBeforeMount, ref, watch } from "vue";
import { SpoonRecipe } from "@/interfaces/SpoonRecipe";
import CategoryOptions from "@/components/categories/CategoryOptions.vue";

const store = useFoodStore();
const allSpoonRecipe = ref<SpoonRecipe[]>([]);

const page = ref(1);

console.log(page.value);


console.log(allSpoonRecipe.value);

watch(allSpoonRecipe, () => {
  store.fetchSpoonRecipes("breakfast", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("appetizer", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("drink", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("snack", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("dessert", allSpoonRecipe.value, page.value);
})

onBeforeMount(() => {
  store.fetchSpoonRecipes("breakfast", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("appetizer", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("drink", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("snack", allSpoonRecipe.value, page.value);
  store.fetchSpoonRecipes("dessert", allSpoonRecipe.value, page.value);
});
</script>
