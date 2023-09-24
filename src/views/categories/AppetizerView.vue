<template>
    <div>
        <food-list :foods="appetizers"></food-list>
    </div>
</template>

<script setup lang="ts">
import FoodList from "@/components/lists/foodList/FoodList.vue";
import { useFoodStore } from "@/store/store";
import { onMounted, ref } from "vue";
import { Food } from "@/interfaces/Food";

const store = useFoodStore();
const appetizers = ref<Food[]>([]);

onMounted(() => {
    store.fetchFood('appetizer', appetizers.value);
})

</script>
