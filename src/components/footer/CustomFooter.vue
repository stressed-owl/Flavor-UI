<template>
    <footer class="bg-[#F3D9DC]">
        <div class="max-w-[1140px] m-auto px-4 py-[100px]">
            <div class="flex items-center justify-between">
                <app-logo></app-logo>
                <div class="flex items-center gap-6">
                    <p class="text-xl mr-5">Let us inspire you</p>
                    <a v-for="link in socialMediaLinks" :key="link.url" :href="link.url" target="_blank">
                        <i :class="link.icon" style="font-size: 32px;"></i>
                    </a>
                </div>
            </div>
            <hr class="mt-6 border-white border-t-2">
        </div>
    </footer>
</template>

<script setup lang="ts">
import AppLogo from '../logo/AppLogo.vue';
import { PrimeIcons } from 'primevue/api';

interface SocialMediaLink {
    url: string;
    icon: string;
}

const socialMediaLinks: SocialMediaLink[] = [
    {
        url: "https://facebook.com",
        icon: PrimeIcons.FACEBOOK
    },
    {
        url: "https://telegram.org",
        icon: PrimeIcons.TELEGRAM
    },
    {
        url: "https://instagram.com",
        icon: PrimeIcons.INSTAGRAM
    },
    {
        url: "https://youtube.com",
        icon: PrimeIcons.YOUTUBE
    },
]
</script>