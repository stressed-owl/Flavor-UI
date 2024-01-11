<template>
    <label class="text-[12px] text-[#00000099] font-medium leading-relaxed tracking-wider flex flex-col max-w-full w-[400px]">
        {{ props.name }}
        <input type="text" :placeholder="props.placeholder"
            class="pl-[20px] py-[18px] text-[14px] border-black leading-relaxed tracking-[-0.28px] mt-[12px] rounded-[16px]" />
    </label>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
})
</script>