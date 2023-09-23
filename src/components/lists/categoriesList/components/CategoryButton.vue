<template>
       <router-link active-class="bg-[#e8d2d5]" class="bg-[#f3d9dc] px-4 py-3 transition-all hover:duration-200 hover:bg-[#e8d2d5] rounded-lg w-[140px] text-center text-lg" :to="`${props.category.url}`">
            {{ props.category.name }}
       </router-link>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { defineProps } from "vue"

const props = defineProps({
    category: {
        type: Object,
        required: true
    }
})

</script>
