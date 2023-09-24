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
import { useFoodStore } from "@/store/store";

const store = useFoodStore();
const snacks = ref<Food[]>([]);

onMounted(() => {
    store.fetchFood('snack', snacks.value)
})

</script>