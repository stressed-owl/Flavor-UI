<template>
    <div class="flex flex-col items-center pb-[30px] pl-[56px] pr-[57px] rounded-[30px]" :style="{ background: props.category.bgColor }">
        <img :src="category.image" alt="category icon">
        <span class="text-[18px] font-semibold tracking-tight mt-[50px]">{{ props.category.title }}</span>
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