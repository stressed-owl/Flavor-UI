<template>
    <v-card max-width="330" variant="tonal">
        <v-card-text>
            <div class="text-2xl font-semibold">{{ props.recipe?.name }}</div>
            <p class="text-md font-bold">{{ props.recipe?.type }}</p>
            <p class="text-md font-bold">{{ props.recipe?.cuisine }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
                Learn More
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
                <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">Origin</p>
                    <p>
                        late 16th century (as a noun denoting a place where alms were
                        distributed): from medieval Latin eleemosynarius, from late Latin
                        eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                    </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";

const reveal = ref(false);

const props = defineProps({
    recipe: {
        type: Object,
        require: true,
    },
});
</script>
