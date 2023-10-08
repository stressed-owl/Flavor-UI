<template>
  <div class="flex justify-center my-[50px]">
    <Dropdown
      v-model="selectedCategory"
      :options="categories"
      optionLabel="name"
      placeholder="Category"
      class="w-full md:w-14rem"
      @click="$emit('selectCategory', selectedCategory)"
    />
  </div>
</template>

<!-- To filter an array of recipes, use filter method on that array. Just
simply check if a type property in an object in that array equals to a selected type  -->

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
