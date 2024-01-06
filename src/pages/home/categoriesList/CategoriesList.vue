<template>
    <div class="mt-[162px]">
        <div class="flex justify-between">
            <p class="text-[48px] font-semibold tracing-[-1.92px]">Categories</p>
            <button class="bg-[#E7FAFE] py-[17px] px-[27px] font-semibold rounded-[16px] w-[200px] h-[60px] tracing-[-0.32px]">View All Categories</button>
        </div>
        <div class="mt-[80px] flex justify-between">
            <category-card v-for="category in categoriesList" :key="category.title" :category="category"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { categoriesList } from "@/data/data";
import CategoryCard from "@/pages/home/categoriesList/categoryCard/CategoryCard.vue";

</script>