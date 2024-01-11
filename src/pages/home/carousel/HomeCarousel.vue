<template>
    <v-carousel hide-delimiters :show-arrows="false" cycle>
        <v-carousel-item v-for="recipe in ((props.recipes) as SpoonRecipe[])" max-width="1640" max-height="840" :key="recipe.id" :src="recipe.image" cover>
            
        </v-carousel-item>
    </v-carousel>
</template>

<script setup lang="ts">
import { SpoonRecipe } from '@/interfaces/recipes/SpoonRecipe';
import { defineProps } from 'vue';

const props = defineProps({
    recipes: {
        type: Array,
        required: true
    }
})
</script>