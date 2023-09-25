<template>
    <footer class="bg-[#F3D9DC] h-fit">
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

            <!-- Links -->
            <div class="mt-7">
                <p class="font-semibold text-lg">Quick Links</p>
                <div>
                    <a class="flex flex-col mt-4 text-sm" v-for="link in footerLinks" :key="link.url" :href="link.url" target="_blank">{{ link.title }}</a>
                </div>
            </div>

            <p class="flex justify-center mt-7">Flavorful Plate 2005-2023. All Rights Reserved</p>
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

interface FooterLink {
    title: string;
    url: string;
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

const footerLinks: FooterLink[] = [
    {
        title: 'Blog',
        url: '/blog'
    },
    {
        title: 'FAQ',
        url: '/faq'
    },
    {
        title: 'Sign In / Join',
        url: '/account'
    },
]
</script>