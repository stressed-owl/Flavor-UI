<template>
    <div>
        <food-list :foods="snacks"></food-list>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import FoodList from "@/components/lists/foodList/FoodList.vue";
import { Food } from "@/interfaces/Food";
import { ref, onMounted } from "vue";

const snacks = ref<Food[]>([]);

const fetchSnacks = async () => {
    try {
        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1129d6441bbb48c4baf8c9dca3f5a901&number=52&type=snack");
        snacks.value.push(...response.data.results);
    } catch (e) {
        console.log(e);
    }
}

onMounted(() => {
    fetchSnacks()
})

</script>