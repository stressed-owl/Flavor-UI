<template>
    <div>
        <food-list :foods="drinks"></food-list>
    </div>
</template>

<script setup lang="ts">
import FoodList from "@/components/lists/foodList/FoodList.vue";
import { Food } from "@/interfaces/Food";
import { ref, onMounted } from "vue";
import { useFoodStore } from "@/store/store";

const store = useFoodStore();
const drinks = ref<Food[]>([]);

onMounted(() => {
    store.fetchFood('drink', drinks.value);
})

</script>