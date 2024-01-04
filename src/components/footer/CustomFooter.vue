<template>
    <footer>
        <div class="max-w-[1440px] m-auto p-5">
            <div class="flex justify-between items-center">
                <app-logo></app-logo>
                <div class="flex items-center gap-x-20">
                    <router-link v-for="link in footerLinks" :to="link.url" :key="link.title"
                        class="transition-all duration-300 tracking-[-0.32px] hover:font-bold">
                        {{ link.title }}
                    </router-link>
                </div>
            </div>
            <hr class="mt-12" />
            <div class="mt-12">
                <div class="flex justify-between">
                    <div>
                        <p>&copy; 2024 Flavorful Plate. Powered by Vue.js</p>
                    </div>
                    <div class="flex gap-x-10">
                        <a v-for="sm in socialMedia" :href="sm.url" :key="sm.url" target="_blank">
                            <v-icon :icon="sm.icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { navLinks, socialMedia } from '@/data/data';
import AppLogo from '../logo/AppLogo.vue';

const footerLinks = navLinks.filter(link => link.title !== 'Home');
</script>