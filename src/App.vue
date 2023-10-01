<template>
  <div class="app">
    <custom-header></custom-header>
    <div class="max-w-[1325px] m-auto">
      <router-view class="my-[50px] min-h-[400px]"></router-view>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script setup lang="ts">
import CustomHeader from "@/components/header/CustomHeader.vue";
import CustomFooter from "@/components/footer/CustomFooter.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
