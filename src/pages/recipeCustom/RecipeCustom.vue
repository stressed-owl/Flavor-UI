<template>
    <div class="mt-6">
        <h1 class="font-bold text-2xl flex items-center justify-center pt-4">Here, you can define your own recipes and start baking your miracle</h1>
        <div class="mt-10">
            <div v-if="count === 0" class="flex flex-col items-center">
                <recipe-custom-fields class="flex flex-col flex-wrap w-full max-w-full items-center justify-center" />
                <div class="flex flex-wrap gap-x-6 mt-5">
                    <medium-button @click="createRecipe">Add recipe</medium-button>
                    <medium-button @click="clearFields">Clear fields</medium-button>
                </div>
            </div>
            <div v-else class="flex justify-between">
                <recipe-custom-fields />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RecipeCustomFields from "@/pages/recipeCustom/recipeCustomFields/RecipeCustomFields.vue";
import MediumButton from "@/components/UI/buttons/medium/MediumCustomButton.vue";
import { ref } from "vue";
import API from "@/API/instance";
import { onBeforeMount } from "vue";
import { useFoodStore } from "@/store/store";

const count = ref(0);
const store = useFoodStore();

const fetchRecipes = async () => {
    try {
        const response = await API.get("/recipes");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const createRecipe = async () => {
    try {
        const data = {
            name: store.name,
            type: store.type,
            cuisine: store.cuisine,
            ingredients: store.ingredients,
            cookingTime: store.cookingTime,
            instructions: store.instructions
        }
        const response = await API.post("/recipes", data);
        count.value = response.data.length;
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const clearFields = () => {
    store.name = "";
    store.type = "";
    store.cuisine = "";
    store.ingredients = "";
    store.cookingTime = "";
    store.instructions = "";
}

onBeforeMount(() => {
    fetchRecipes();
})
</script>