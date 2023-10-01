import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue"
import DrinkView from "@/views/categories/DrinkView.vue"
import AppetizerView from "@/views/categories/AppetizerView.vue"
import BreakfastView from "@/views/categories/BreakfastView.vue"
import SnackView from "@/views/categories/SnackView.vue"
import DessertView from "@/views/categories/DessertView.vue"
import MyRecipeView from "@/views/categories/MyRecipeView.vue"
import AboutView from "@/views/about/AboutView.vue"
import ContactView from "@/views/contact/ContactView.vue"
import CareerView from "@/views/careers/CareerView.vue"

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
      path: "/myRecipe",
      name: "My Recipe",
      component: MyRecipeView
    },
    {
      path: "/about",
      name: "About",
      component: AboutView
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView
    },
    {
      path: "/career",
      name: "Career",
      component: CareerView
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
