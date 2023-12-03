<template>
  <div class="flex flex-wrap items-center justify-center gap-6">
    <template v-if="wishlistRecipes.length">
      <recipe-card v-for="recipe in wishlistRecipes" :key="recipe.id" :recipe="recipe">
        <v-card-actions>
          <v-btn @click="store.deleteRecipeFromWishlist(recipe)" class="hover:bg-[#AFCBFF]"
                 variant="text">
            <span class="text-[#AFCBFF] font-bold h-fit hover:text-[#FFF]">
              Remove
            </span>
          </v-btn>
        </v-card-actions>
      </recipe-card>
    </template>
    <template v-else>
      <div class="flex flex-col items-center justify-center font-bold text-2xl min-h-[50vh]">
        <p>Whoops, no recipes in wishlist.</p>
        <p>I think we can solve it &#128527;</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {useFoodStore} from "@/store/store";
import RecipeCard from "@/components/UI/cards/RecipeCard.vue";

const wishlistRecipes = JSON.parse(localStorage.getItem("wishlist_recipes"))
const store = useFoodStore();
</script>