import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue"
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
