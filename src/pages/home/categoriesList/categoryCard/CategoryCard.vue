<template>
    <div>
        <span class="text-[18px] font-semibold tracking-tight">{{ props.category.title }}</span>
        <img :src="category.image" alt="category icon">
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    category: {
        type: Object,
        required: true
    }
})
</script>