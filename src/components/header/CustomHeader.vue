<template>
    <header class="bg-[#AFCBFF]">
        <div class="py-4 px-7 max-w-[1425px] m-auto flex items-center justify-between">
            <app-logo class="sm:text-xl italic"></app-logo>
            <div class="flex items-center gap-16 sm:gap-8">
                <div class="flex items-center gap-16 md:hidden sm:gap-8">
                    <router-link  v-for="link in navLinks" :to="link.url" :key="link.title">
                        {{ link.title }}
                    </router-link>
                </div>
                <img @click="store.handleBurgerMenuClick" class="hidden md:block" src="../../assets/menu.png" alt="hamburger icon">
            </div>
        </div>
    </header>
    <menu-modal v-if="store.isModalShown" :class="{ '!overflow-hidden': store.isModalShown }" />
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { navLinks } from "@/data/data";
import AppLogo from "@/components/logo/AppLogo.vue"
import { useFoodStore } from "@/store/store";
import MenuModal from "./modal/MenuModal.vue";

const store = useFoodStore();

</script>