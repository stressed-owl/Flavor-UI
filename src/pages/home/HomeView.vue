<template>
  <main>
    <div class="flex flex-col justify-center items-center">
      <category-text-field @keyup.enter="store.fetchSpoonRecipes" class="max-w-[500px] w-full">
      </category-text-field>
      <p class="font-bold">Recipes found: {{ store.spoonRecipes.length }}</p>
    </div>
    <recipe-list class="flex justify-center mt-7" :recipes="store.spoonRecipes" />
  </main>
</template>

<script setup lang="ts">
import RecipeList from "@/components/lists/recipeList/RecipeList.vue";
import CategoryTextField from "@/components/UI/textFields/CategoryTextField.vue";
import { useFoodStore } from "@/store/store";
import { onMounted } from "vue";

const store = useFoodStore();

onMounted(() => {
  store.fetchSpoonRecipes();
});

</script>
