<template>
  <main>
    <div class="flex flex-col justify-center items-center">
      <category-text-field @keyup.enter="store.fetchSpoonRecipes" class="max-w-[500px] w-full">
      </category-text-field>
      <p class="font-bold">Recipes found: {{ store.spoonRecipes.length }}</p>
    </div>
    <recipe-list v-if="store.spoonRecipes.length" class="flex justify-center mt-7" :foods="store.spoonRecipes">
    </recipe-list>
    <p v-else class="flex items-center justify-center font-bold text-2xl min-h-[50vh]">No data</p>
  </main>
</template>

<script setup lang="ts">
import RecipeList from "@/components/recipeList/RecipeList.vue";
import CategoryTextField from "@/components/UI/textFields/CategoryTextField.vue";
import { useFoodStore } from "@/store/store";
import { onMounted } from "vue";

const store = useFoodStore();

onMounted(() => {
  store.fetchSpoonRecipes();
});

</script>
