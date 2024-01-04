import { SpoonRecipe } from '@/interfaces/recipes/SpoonRecipe';
import { MyRecipe } from "@/interfaces/recipes/MyRecipe";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFoodStore = defineStore("food", () => {
  // Arrays to store recipes from database and API respectively
  const myRecipes = ref<MyRecipe[]>([]);
  const spoonRecipes = ref<SpoonRecipe[]>([]);
  const wishlistRecipes = ref<SpoonRecipe[]>([]);
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
  if(JSON.parse(localStorage.getItem('wishlist_recipes') || "{}") !== null) {
    wishlistRecipes.value = JSON.parse(localStorage.getItem('wishlist_recipes') || "{}");
  }

  const addRecipeToWishlist = (recipe: SpoonRecipe) => {
    wishlistRecipes.value.push(recipe);
    localStorage.setItem("wishlist_recipes", JSON.stringify(wishlistRecipes.value));
  }

  const deleteRecipeFromWishlist = (recipe: SpoonRecipe) => {
    wishlistRecipes.value = wishlistRecipes.value.filter((wishRecipe: SpoonRecipe) => wishRecipe.id !== recipe.id);
    localStorage.setItem("wishlist_recipes", JSON.stringify(wishlistRecipes.value));
  }

  return { 
    addRecipeToWishlist, 
    deleteRecipeFromWishlist, 
    fetchSpoonRecipes, 
    myRecipes, 
    spoonRecipes, 
    foodCategory,
    wishlistRecipes
  };
});


