<template>
    <div class="flex flex-wrap gap-5">
        <food-card v-for="food in (props.foods as Food[])" :key="(food as Food).id" :food="(food as Food)"></food-card>
    </div>
</template>

<script setup lang="ts">
import FoodCard from '../../UI/FoodCard.vue';
import { defineProps } from 'vue';
import { Food } from "@/interfaces/Food"

const props = defineProps({
    foods: {
        type: Array,
        required: true
    }
})

</script>