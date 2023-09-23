<template>
    <div>
        <food-list :foods="breakfasts"></food-list>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import FoodList from "@/components/lists/foodList/FoodList.vue";
import { Food } from "@/interfaces/Food";
import { ref, onMounted } from "vue";

const breakfasts = ref<Food[]>([]);

const fetchBreakfasts = async () => {
    try {
        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1129d6441bbb48c4baf8c9dca3f5a901&number=52&type=breakfast");
        breakfasts.value.push(...response.data.results);
    } catch (e) {
        console.log(e);
    }
}

onMounted(() => {
    fetchBreakfasts()
})

</script>