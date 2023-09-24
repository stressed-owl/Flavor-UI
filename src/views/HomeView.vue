<template>
    <main>
        <food-list :foods="allFoods"></food-list>
    </main>
</template>

<script setup lang="ts">
import FoodList from "@/components/lists/foodList/FoodList.vue";
import { useFoodStore } from "@/store/store";
import { onMounted, ref } from "vue";
import { Food } from "@/interfaces/Food";

const store = useFoodStore();
const allFoods = ref<Food[]>([]);

onMounted(() => {
    store.fetchFood('breakfast', allFoods.value);
    store.fetchFood('appetizer', allFoods.value);
    store.fetchFood('drink', allFoods.value);
    store.fetchFood('snack', allFoods.value);
    store.fetchFood('dessert', allFoods.value);
})
</script>