<template>
  <div>
    <template v-if="!store.wishlistRecipes.length">
      <div class="flex flex-col items-center justify-center font-bold text-2xl min-h-[50vh]">
        <p>Whoops, no recipes in wishlist.</p>
        <p>I think we can solve it &#128527;</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useFoodStore } from "@/store/store";

const store = useFoodStore();
</script>