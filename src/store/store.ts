import { SpoonRecipe } from '@/interfaces/recipes/SpoonRecipe';
import { CustomRecipe } from "@/interfaces/recipes/CustomRecipe";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import API from "../API/instance";

export const useFoodStore = defineStore("food", () => {
  // Arrays to store recipes from database and API respectively
  const customRecipes = ref<CustomRecipe[]>([]);
  const spoonRecipes = ref<SpoonRecipe[]>([]);
  // Food category that user enters in a text field
  const foodCategory = ref<string>("");

  // Ref variable that holds modal's state
  const isModalShown = ref(false);

  // Ref variables that hold user's custom recipe values
  const name = ref("");
  const type = ref("");
  const cuisine = ref("");
  const ingredients = ref("");
  const cookingTime = ref("");
  const instructions = ref("");

  // Fetching recipies from Spoonacular API
  const fetchSpoonRecipes = async () => {
    spoonRecipes.value = [];
    try {
      const URL = `https://api.spoonacular.com/recipes/random?apiKey=b5e107c53a054ab98e7f0afb88dc6bea&number=100&tags=${foodCategory.value.toLowerCase()}`;
      const response = await axios.get(URL);
      spoonRecipes.value.push(...response.data.recipes);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCustomRecipes = async () => {
    try {
      const response = await API.get("/recipe");
      customRecipes.value.push(...response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const addCustomRecipe = async () => {
    try {
      const data = {
        name: name,
        type: type,
        cuisine: cuisine,
        ingredients: ingredients,
        cookingTime: cookingTime,
        instructions: instructions
      }
      const response = await API.post("/recipe", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  const deleteCustomRecipe = async (id: number) => {
    try {
      const response = await API.delete(`/recipe/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  } 

  const handleBurgerMenuClick = () => {
    isModalShown.value = !isModalShown.value;
  };

  return {
    fetchSpoonRecipes,
    customRecipes,
    spoonRecipes,
    foodCategory,
    handleBurgerMenuClick,
    addCustomRecipe,
    deleteCustomRecipe,
    fetchCustomRecipes,
    isModalShown,
    name,
    type,
    cuisine,
    ingredients,
    cookingTime,
    instructions,
  };
});
