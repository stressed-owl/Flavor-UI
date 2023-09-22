<template>
    <header class="bg-[#F3D9DC]">
        <div class="p-4 max-w-[1325px] m-auto flex items-center justify-between">
            <router-link to="/" class="font-bold text-3xl">LineStuck</router-link>
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
        url: "/careers"
    }
]
</script>