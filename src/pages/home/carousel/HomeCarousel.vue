<template>
    <v-carousel hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="recipe in props.recipes" :key="recipe.id" :src="recipe.image" cover>
            
        </v-carousel-item>
    </v-carousel>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    recipes: {
        type: Array,
        required: true
    }
})
</script>