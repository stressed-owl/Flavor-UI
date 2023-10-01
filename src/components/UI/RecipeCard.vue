<template>
  <router-link :to="`/drink/${props.food.id}`">
    <div class="card flex align-items-center justify-content-center">
      <Card style="width: 25em">
        <template #header>
          <img alt="user header" :src="props.food.image" />
        </template>
        <template #title> {{ props.food.title }} </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button
            icon="pi pi-times"
            label="Cancel"
            severity="secondary"
            style="margin-left: 0.5em"
          />
        </template>
      </Card>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import Card from "primevue/card";

const props = defineProps({
  food: {
    type: Object,
    required: true,
  },
});
</script>
