<template>
  <div :class="{ 'fixed': store.isModalShown }" class="w-screen h-screen overflow-hidden bg-[#AFCBFF] py-4 px-7 absolute z-50 top-0 right-0 bottom-0 left-0">
    <div class="flex justify-between">
        <div>
            <app-logo class="text-xl"></app-logo>
            <div class="mt-4 flex flex-col gap-3">
              <router-link @click="store.handleBurgerMenuClick" v-for="link in navLinks" :to="link.url" :key="link.title">
                {{ link.title }}
              </router-link>
            </div>
        </div>
        <div class="h-fit">
            <img @click="store.handleBurgerMenuClick" class="mt-1" src="../../../assets/close.png" alt="close icon">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { navLinks } from "@/data/data";
import AppLogo from "@/components/logo/AppLogo.vue";
import { useFoodStore } from "@/store/store";

const store = useFoodStore();
</script>