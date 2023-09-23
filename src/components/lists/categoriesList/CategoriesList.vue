<template>
    <div class="mt-10">
        <p class="flex justify-center text-[20px] font-bold">Categories</p>
        <div class="flex items-center gap-7 justify-center mt-4">
            <category-button v-for="category in categories" :key="category.id" :category="category"></category-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import CategoryButton from './components/CategoryButton.vue';
import { Category } from '../../../interfaces/Category';

const categories: Category[] = [
    {
        id: 1,
        name: 'All',
        url: '/'
    },
    {
        id: 2,
        name: 'Breakfast',
        url: '/breakfast'
    },
    {
        id: 3,
        name: 'Appetizer',
        url: '/appetizer'
    },
    {
        id: 4,
        name: 'Drink',
        url: '/drink'
    },
    {
        id: 5,
        name: 'Snack',
        url: '/snack'
    },
    {
        id: 6,
        name: 'Dessert',
        url: '/dessert'
    },
    {
        id: 7,
        name: 'My Recipes',
        url: '/my_recipes'
    },
]
</script>