<template>
    <header class="bg-[#AFCBFF]">
        <div class="py-4 px-7 max-w-[1425px] m-auto flex items-center justify-between ">
            <app-logo></app-logo>
            <div class="flex gap-16 md:hidden">
                <router-link  v-for="link in navLinks" :to="link.url" :key="link.title">
                    {{ link.title }}
                </router-link>
                <!-- Place burger icon here -->
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { navLinks } from "@/data/data";
import AppLogo from "@/components/logo/AppLogo.vue"
</script>