<template>
  <div class="flex flex-wrap items-center justify-center gap-6">
    <template v-if="store.customRecipes.length">
      <recipe-card v-for="recipe in store.customRecipes" :key="recipe.id" :recipe="recipe">
        <v-card-actions>
          <v-btn @click="store.deleteCustomRecipe(recipe.id)" class="hover:bg-[#AFCBFF]" variant="text">
            <span class="text-[#AFCBFF] font-bold h-fit hover:text-[#FFF]">
              Remove
            </span>
          </v-btn>
        </v-card-actions>
      </recipe-card>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useFoodStore } from "../../../store/store";
import RecipeCard from "../../../components/UI/cards/RecipeCard.vue";

const store = useFoodStore();
</script>
