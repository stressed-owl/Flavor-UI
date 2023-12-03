<template>
  <router-link :to="`/drink/${props.food.id}`">
    <v-card class="rounded w-[350px] h-fit">
      <v-img class="w-[350px] h-[250px]" cover :src="props.food.image"></v-img>
      <div class="p-2">
        <v-card-title class="text-[#AFCBFF] font-bold break-all">
          {{ props.food.title }}
        </v-card-title>
        <v-card-actions>
          <v-btn @click="store.addRecipeToWishlist((props.food as SpoonRecipe))" class="hover:bg-[#AFCBFF]" variant="text">
            <span class="text-[#AFCBFF] font-bold h-fit hover:text-[#FFF]">
              Add to wishlist
            </span>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { useFoodStore } from "@/store/store";
import { SpoonRecipe } from "@/interfaces/recipes/SpoonRecipe";

const store = useFoodStore();

const props = defineProps({
  food: {
    type: Object,
    required: true,
  },
});
</script>
