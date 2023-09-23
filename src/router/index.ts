import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import DrinkView from "@/views/categories/DrinkView.vue"
import AppetizerView from "@/views/categories/AppetizerView.vue"
import BreakfastView from "@/views/categories/BreakfastView.vue"
import SnackView from "@/views/categories/SnackView.vue"
import DessertView from "@/views/categories/DessertView.vue"
import MyRecipesView from "@/views/categories/MyRecipesView.vue"

const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: 'Home',
      component: HomeView
    },
    {
      path: "/all",
      name: "All",
      redirect: "/"
    },
    {
      path: "/drink",
      name: "Drink",
      component: DrinkView
    },
    {
      path: "/appetizer",
      name: "Appetizer",
      component: AppetizerView
    },
    {
      path: "/breakfast",
      name: "Breakfast",
      component: BreakfastView
    },
    {
      path: "/snack",
      name: "Snack",
      component: SnackView
    },
    {
      path: "/dessert",
      name: "Dessert",
      component: DessertView
    },
    {
      path: '/my_recipes',
      name: "MyRecipies",
      component: MyRecipesView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
