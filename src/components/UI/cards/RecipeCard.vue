<template>
  <router-link :to="`/recipe/${props.recipe.id}`">
    <v-card class="rounded w-[350px] h-fit">
      <v-img class="w-[350px] h-[250px]" cover :src="recipe.image"></v-img>
      <div class="p-2">
        <v-card-title class="text-[#AFCBFF] font-bold break-all">
          {{ recipe.title }}
        </v-card-title>
      </div>
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>
