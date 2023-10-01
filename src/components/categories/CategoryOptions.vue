<template>
  <div class="flex justify-center my-[50px]">
    <Dropdown
      v-model="selectedCategory"
      :options="categories"
      optionLabel="name"
      placeholder="Category"
      class="w-full md:w-14rem"
    />
  </div>
</template>

<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import { ref } from "vue";

const selectedCategory = ref();
const categories = ref([
  { name: "All" },
  { name: "Breakfast" },
  { name: "Appetizer" },
  { name: "Snack" },
  { name: "Dessert" },
  { name: "Drink" },
]);
</script>
