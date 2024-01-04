<template>
    <div>
        <div class="max-w-[1400px] w-full flex flex-wrap items-center gap-x-5">
            <v-text-field v-model="store.name" class="max-w-[400px] w-full" label="Name" variant="outlined"></v-text-field>
            <v-text-field v-model="store.type" class="max-w-[400px] w-full" label="Type" variant="outlined"></v-text-field>
            <v-text-field v-model="store.cuisine" class="max-w-[400px] w-full" label="Cuisine" variant="outlined"></v-text-field>
        </div>
        <div class="max-w-[1400px] w-full flex flex-wrap items-center gap-x-5">
            <v-text-field v-model="store.ingredients" class="max-w-[400px] w-full mt-1" label="Ingredients" variant="outlined"></v-text-field>
            <v-text-field v-model="store.cookingTime" class="max-w-[400px] w-full mt-1" label="Cooking Time" variant="outlined"></v-text-field>
            <v-text-field v-model="store.instructions" class="max-w-[400px] w-full mt-1" label="Instructions" variant="outlined"></v-text-field>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFoodStore } from '@/store/store';

const store = useFoodStore();
</script>