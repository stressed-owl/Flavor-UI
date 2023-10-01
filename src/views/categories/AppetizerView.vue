<template>
  <div>
    <recipe-list :foods="appetizers"></recipe-list>
    <div class="my-[100px] flex items-center justify-center gap-5">
      <PrimeButton label="Next" @click="page = page + 1" />
      <PrimeButton label="Back" @click="page = page - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecipeList from "@/components/recipeList/RecipeList.vue";
import { useFoodStore } from "@/store/store";
import { onBeforeMount, ref } from "vue";
import { SpoonRecipe } from "@/interfaces/SpoonRecipe";

const store = useFoodStore();
const appetizers = ref<SpoonRecipe[]>([]);

const page = ref(1);

onBeforeMount(() => {
  store.fetchSpoonRecipes("appetizer", appetizers.value, page.value);
});
</script>
