<template>
  <div>
    <recipe-list :foods="desserts"></recipe-list>
    <div class="my-[100px] flex items-center justify-center gap-5">
      <PrimeButton label="Next" @click="page = page + 1" />
      <PrimeButton label="Back" @click="page = page - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecipeList from "@/components/recipeList/RecipeList.vue";
import { SpoonRecipe } from "@/interfaces/SpoonRecipe";
import { ref, onBeforeMount } from "vue";
import { useFoodStore } from "@/store/store";

const store = useFoodStore();
const desserts = ref<SpoonRecipe[]>([]);

const page = ref(1);

onBeforeMount(() => {
  store.fetchSpoonRecipes("desserts", desserts.value, page.value);
});
</script>
