import { SpoonRecipe } from "@/interfaces/recipes/SpoonRecipe";
import { MyRecipe } from "@/interfaces/recipes/MyRecipe";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFoodStore = defineStore("food", () => {
  // Arrays to store recipies from database and API respectively
  const myRecipes = ref<MyRecipe[]>([]);
  const spoonRecipes = ref<SpoonRecipe[]>([]);

  // Fetching recipies from Spoonacular API
  const fetchSpoonRecipes = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.VUE_APP_API_KEY}&number=15`);
      spoonRecipes.value.push(...response.data.recipes);
    } catch (e) {
      console.log(e);
    }
  };

  return { fetchSpoonRecipes, myRecipes, spoonRecipes };
});


