<template>
  <div class="flex flex-wrap gap-6">
    <template v-if="props.recipes?.length">
      <recipe-card
          v-for="recipe in (props.recipes as SpoonRecipe[])"
          :key="(recipe as SpoonRecipe).id"
          :recipe="(recipe as SpoonRecipe)">
        <v-card-actions>
          <v-btn @click="store.addRecipeToWishlist(recipe)"
                 variant="text">
            <span class="text-[#AFCBFF] font-bold">
              Add to wishlist
            </span>
          </v-btn>
        </v-card-actions>
      </recipe-card>
    </template>
    <p v-else class="flex items-center justify-center font-bold text-2xl min-h-[50vh]">No data</p>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from "@/components/UI/cards/RecipeCard.vue";
import {defineProps} from "vue";
import {SpoonRecipe} from "@/interfaces/recipes/SpoonRecipe";
import {useFoodStore} from "@/store/store";

const store = useFoodStore();

const props = defineProps({
  recipes: {
    type: Array,
    required: true,
  },
});
</script>
