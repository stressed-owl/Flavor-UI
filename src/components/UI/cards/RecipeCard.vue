<template>
  <router-link :to="`/recipe/${props.food.id}`">
    <v-card class="rounded w-[350px] h-fit">
      <v-img class="w-[350px] h-[250px]" cover :src="food.image"></v-img>
      <div class="p-2">
        <v-card-title class="text-[#AFCBFF] font-bold break-all">
          {{ food.title }}
        </v-card-title>
      </div>
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  food: {
    type: Object,
    required: true,
  },
});
</script>
