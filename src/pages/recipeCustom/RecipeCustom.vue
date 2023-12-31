<template>
    <div class="mt-6">
        <h1 class="font-bold text-2xl flex items-center justify-center pt-4">Here, you can define your own recipes and start baking your miracle</h1>
        <div class="mt-10">
            <div v-if="count === 0" class="flex flex-col flex-wrap w-full items-center justify-center">
                <!-- Finish styling text fields for custom recipes -->
                <div class="flex flex-wrap items-center justify-center gap-4 max-w-full w-full">
                    <v-text-field class="max-w-[300px] w-full" label="Name" variant="solo-filled"></v-text-field>
                    <v-text-field class="max-w-[300px] w-full" label="Type" variant="solo-filled"></v-text-field>
                    <v-text-field class="max-w-[300px] w-full" label="Cuisine" variant="solo-filled"></v-text-field>
                </div>
                <div>
                    <v-text-field class="max-w-full w-full" label="Ingredients" variant="solo-filled"></v-text-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0); 
</script>