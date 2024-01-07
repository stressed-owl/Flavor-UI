<template>
    <div class="bg-[linear-gradient(180deg, rgba(231, 249, 253, 0.00) 0%, #E7F9FD 100%)]">
        <div class="text-center">
            <p class="text-[48px] font-semibold tracking-tightest">Check out &copy;foodieland on Instagram</p>
            <p class="text-grey-500 leading-relaxed mt-6">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div class="mt-[80px] flex items-center justify-between">
            <img v-for="insta in checkoutInstagramImages" :src="insta.image" :key="insta.id" alt="instagram image">
        </div>
        <medium-button>
            Visit Our Instagram
            <v-icon :icon="mdiInstagram" />
        </medium-button>
    </div>
</template>

<script setup lang="ts">
import { checkoutInstagramImages } from "../../../data/data";
import MediumButton from "../../../components/UI/buttons/medium/MediumCustomButton.vue";
import { mdiInstagram } from "@mdi/js";
</script>