<template>
    <div class="mt-6">
        <div class="flex flex-col items-center justify-center">
            <img :src="recipe?.image" alt="recipe image">
            <h1 class="mt-4">{{ recipe?.title }}</h1>
            <p class="mt-2">{{ recipe?.summary }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useFoodStore } from "@/store/store";

const route = useRoute();
const store = useFoodStore();

const recipeID = route.params.id;
const recipe = store.spoonRecipes.find(recipe => recipe.id.toString() === recipeID.toString());
</script>