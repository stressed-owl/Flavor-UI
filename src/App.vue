<template>
  <div>
    <custom-header></custom-header>
    <div class="max-w-[1325px] m-auto px-7">
      <router-view class="my-[50px] min-h-[500px]"></router-view>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script setup lang="ts">
import CustomHeader from "@/components/header/CustomHeader.vue";
import CustomFooter from "@/components/footer/CustomFooter.vue";
</script>
