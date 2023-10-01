<template>
  <div class="flex flex-wrap gap-5">
    <recipe-card
      v-for="food in (props.foods as SpoonRecipe[])"
      :key="(food as SpoonRecipe).id"
      :food="(food as SpoonRecipe)">
  </recipe-card>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from "../UI/RecipeCard.vue";
import { defineProps } from "vue";
import { SpoonRecipe } from "../../interfaces/SpoonRecipe";

const props = defineProps({
  foods: {
    type: Array,
    required: true,
  },
});
</script>
