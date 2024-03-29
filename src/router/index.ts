import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from "@/pages/home/HomeView.vue";
import AboutView from "@/pages/about/AboutView.vue";
import ContactView from "@/pages/contact/ContactView.vue";
import RecipeDetails from "@/pages/recipeDetails/RecipeDetails.vue";

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
      path: "/contact",
      name: "Contact",
      component: ContactView
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
