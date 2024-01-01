<template>
  <v-text-field 
      label="Category" 
      :placeholder="placeholder" 
      variant="outlined" 
      v-model="store.foodCategory">
  </v-text-field>
</template>

<script setup lang="ts">
import { categoryPlaceholders } from "../../../data/data";
import { useFoodStore } from "../../../store/store";

const placeholder = categoryPlaceholders[Math.floor(Math.random()*categoryPlaceholders.length)];
const store = useFoodStore();
</script>
