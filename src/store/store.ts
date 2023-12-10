import { SpoonRecipe } from "@/interfaces/recipes/SpoonRecipe";
import { MyRecipe } from "@/interfaces/recipes/MyRecipe";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFoodStore = defineStore("food", () => {
  // Arrays to store recipies from database and API respectively
  const myRecipes = ref<MyRecipe[]>([]);
  const spoonRecipes = ref<SpoonRecipe[]>([]);
  // Food category that user enters in a text field
  const foodCategory = ref<string>("");

  // Ref variable that holds modal's state
  const isModalShown = ref(false);

  // Fetching recipies from Spoonacular API
  const fetchSpoonRecipes = async () => {
    spoonRecipes.value = [];
    try {
      const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.VUE_APP_API_KEY}&number=100&tags=${foodCategory.value.toLowerCase()}`;
      const response = await axios.get(URL);
      spoonRecipes.value.push(...response.data.recipes);
    } catch (e) {
      console.log(e);
    }
  };

  const handleBurgerMenuClick = () => {
    isModalShown.value = !isModalShown.value;
  }

  return { fetchSpoonRecipes, myRecipes, spoonRecipes, foodCategory, handleBurgerMenuClick, isModalShown };
});


