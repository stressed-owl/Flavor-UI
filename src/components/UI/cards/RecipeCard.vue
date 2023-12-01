<template>
  <router-link :to="`/drink/${props.food.id}`">
    <v-card title="Card title" subtitle="Subtitle" text="..."></v-card>
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
