<template>
    <header class="bg-[#F3D9DC]">
        <div class="p-4 max-w-[1425px] m-auto flex items-center justify-between">
            <app-logo></app-logo>
            <div class="flex gap-16">
                <router-link  v-for="link in navLinks" :to="link.url" :key="link.title">
                    {{ link.title }}
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import AppLogo from "@/components/logo/AppLogo.vue"

interface NavLink {
    title: string;
    url: string;
}

const navLinks: NavLink[] = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About",
        url: "/about"
    },
    {
        title: "Contact",
        url: "/contact"
    },
    {
        title: "Careers",
        url: "/career"
    }
]
</script>