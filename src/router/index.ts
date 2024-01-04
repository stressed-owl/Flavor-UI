import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/pages/home/HomeView.vue"
import AboutView from "@/pages/about/AboutView.vue"
import RecipeDetails from "@/pages/recipeDetails/RecipeDetails.vue";
import RecipeCustom from "@/pages/recipeCustom/RecipeCustom.vue";

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
      path: "/about",
      name: "About",
      component: AboutView
    },
    {
      path: "/recipe/:id",
      name: "Recipe Details",
      component: RecipeDetails
    },
    {
      path: "/my-own-recipes",
      name: "My own recipes",
      component: RecipeCustom
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
