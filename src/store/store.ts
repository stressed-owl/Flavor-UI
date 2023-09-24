import { Food } from "@/interfaces/Food"
import axios from "axios"
import { defineStore } from "pinia"

export const useFoodStore = defineStore('food', () => {
    const fetchFood = async (type: string, foods: Food[]) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.VUE_APP_API_KEY}&number=100&type=${type}`);
            foods.push(...response.data.results);
        } catch (e) {
            console.log(e);
        }
    }

    return { fetchFood  }
  }
)