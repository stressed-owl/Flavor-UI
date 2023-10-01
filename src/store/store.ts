import { SpoonRecipe } from "@/interfaces/SpoonRecipe";
import { MyRecipe } from "@/interfaces/MyRecipe";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFoodStore = defineStore("food", () => {
  const myRecipes = ref<MyRecipe[]>([]);

  // Fetching recipies from Spoonacular API
  const fetchSpoonRecipes = async (
    type: string,
    recipes: SpoonRecipe[],
    page: number
  ) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=2&_offset=${page * 2}`);
      recipes.push(...response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return { fetchSpoonRecipes, myRecipes };
});

// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
//   process.env.VUE_APP_API_KEY
// }&number=12&type=${type}&offset=${page * 12}`
