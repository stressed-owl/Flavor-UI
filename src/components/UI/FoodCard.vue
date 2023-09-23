<template>
    <router-link :to="`/drink/${props.food.id}`">
        <div class="rounded-xl bg-red-50 w-[300px] max-w-[320px] min-h-[350px]">
            <img class="rounded-xl w-[300px] h-[230px] object-cover" :src="props.food.image" alt="food">
            <div class="p-4">
                <p class="font-bold text-lg text-center mt-2">
                    {{ props.food.title }}
                </p>
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    food: {
        type: Object,
        required: true
    }
})

</script>