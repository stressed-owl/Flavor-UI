<template>
  <div class="flex justify-center my-[50px]">

  </div>
</template>

<!-- To filter an array of recipes, use filter method on that array. Just
simply check if a type property in an object in that array equals to a selected type  -->

<script setup lang="ts">
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
