<template>
  <div class="app">
    <div class="app__header">
      <custom-header></custom-header>
    </div>
    <div class="app__main">
      <router-view></router-view>
    </div>
    <div class="app__footer">

    </div>
  </div>
  
</template>

<script lang="ts" setup>
import CustomHeader from "./components/header/CustomHeader.vue";
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
