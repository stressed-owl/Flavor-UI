<template>
    <header class="shadow-xl">
        <div class="py-6 px-7 max-w-[1640px] m-auto flex items-center justify-between">
            <app-logo class="sm:text-xl italic"></app-logo>
            <div class="flex items-center gap-x-16 sm:gap-8">
                <div class="flex items-center gap-x-20 md:hidden sm:gap-8">
                    <router-link  v-for="link in navLinks" :to="link.url" :key="link.title" class="transition-all duration-300 tracking-[-0.32px] hover:font-bold">
                        {{ link.title }}
                    </router-link>
                </div>
                <img @click="store.handleBurgerMenuClick" class="hidden md:block" src="../../assets/menu.png" alt="hamburger icon">
            </div>
            <div class="flex gap-x-10">
                <a v-for="sm in socialMedia" :href="sm.url" :key="sm.url" target="_blank">
                    <v-icon :icon="sm.icon"/>
                </a>
            </div>
        </div>
    </header>
    <menu-modal v-if="store.isModalShown" :class="{ '!overflow-hidden': store.isModalShown }" />
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { navLinks, socialMedia } from "@/data/data";
import AppLogo from "@/components/logo/AppLogo.vue"
import { useFoodStore } from "@/store/store";
import MenuModal from "./modal/MenuModal.vue";

const store = useFoodStore();

</script>