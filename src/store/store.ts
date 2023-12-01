import { SpoonRecipe } from "@/interfaces/recipes/SpoonRecipe";
import { MyRecipe } from "@/interfaces/recipes/MyRecipe";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFoodStore = defineStore("food", () => {
  const myRecipes = ref<MyRecipe[]>([]);
  const spoonRecipes = ref<SpoonRecipe[]>([]);

  // Fetching recipies from Spoonacular API
  const fetchSpoonRecipes = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
      spoonRecipes.value.push(...response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return { fetchSpoonRecipes, myRecipes, spoonRecipes };
});


