<template>
  <div class="app">
    <div class="app__header">
      <custom-header></custom-header>
    </div>
    <div class="max-w-[1325px] m-auto">
      <categories-list></categories-list>
      <router-view></router-view>
    </div>
    <div class="app__footer">
      <custom-footer></custom-footer>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import CustomHeader from "@/components/header/CustomHeader.vue";
import CustomFooter from "@/components/footer/CustomFooter.vue";
import CategoriesList from '@/components/lists/categoriesList/CategoriesList.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
