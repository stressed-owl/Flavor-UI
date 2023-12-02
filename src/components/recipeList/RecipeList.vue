<template>
  <div class="flex flex-wrap gap-6">
    <recipe-card
      v-for="food in (props.foods as SpoonRecipe[])"
      :key="(food as SpoonRecipe).id"
      :food="(food as SpoonRecipe)">
    </recipe-card>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from "../UI/cards/RecipeCard.vue";
import { defineProps } from "vue";
import { SpoonRecipe } from "@/interfaces/recipes/SpoonRecipe";

const props = defineProps({
  foods: {
    type: Array,
    required: true,
  },
});
</script>
