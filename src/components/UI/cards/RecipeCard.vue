<template>
  <router-link :to="`/drink/${props.food.id}`">
    <v-card class="rounded w-[350px] h-[500px]">
      <v-img class="w-[350px] h-[300px]" cover :src="food.image"></v-img>
      <div class="p-2">
        <v-card-title class="break-words">
          {{ food.title }}
        </v-card-title>
        <v-card-text class="text-ellipsis" v-html="food.summary"></v-card-text>
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
