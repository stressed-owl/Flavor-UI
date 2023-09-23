<template>
    <div>
        <food-list :foods="appetizers"></food-list>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import FoodList from "@/components/lists/foodList/FoodList.vue";
import { Food } from "@/interfaces/Food";
import { ref, onMounted } from "vue";

const appetizers = ref<Food[]>([]);

const fetchAppetizers = async () => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&number=52&type=appetizer`);
        appetizers.value.push(...response.data.results);
    } catch (e) {
        console.log(e);
    }
}

onMounted(() => {
    fetchAppetizers()
})

</script>
