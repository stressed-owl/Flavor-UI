<template>
    <div>
        <food-list :foods="breakfasts"></food-list>
    </div>
</template>

<script setup lang="ts">
import FoodList from "@/components/lists/foodList/FoodList.vue";
import { useFoodStore } from "@/store/store";
import { onMounted, ref } from "vue";
import { Food } from "@/interfaces/Food";

const store = useFoodStore();
const breakfasts = ref<Food[]>([]);

onMounted(() => {
    store.fetchFood('breakfast', breakfasts.value);
})

</script>