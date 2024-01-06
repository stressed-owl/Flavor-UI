import { NavLink, SocialMediaLink } from "@/interfaces/links/Links";
import { Category } from "@/interfaces/category/Category";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";

const navLinks: NavLink[] = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Recipes",
        url: "/recipes"
    },
    {
        title: "Blog",
        url: "/blog"
    },
    {
        title: "Contact",
        url: "/contact"
    },
    {
        title: "About us",
        url: "/about"
    }
]

const socialMedia: SocialMediaLink[] = [
    {
        icon: mdiFacebook,
        url: "https://www.facebook.com/"
    },
    {
        icon: mdiTwitter,
        url: "https://twitter.com/home"
    },
    {
        icon: mdiInstagram,
        url: "https://www.instagram.com/"
    },
]

const categoryPlaceholders: string[] = ['Dessert', 'Vegetarian', 'German', 'Italian']

const categoriesList: Category[] = [
    {
        image: "@/assets/categories/breakfast.svg",
        bgColor: "bg-gradient-to-t from-transparent via-green-500 to-green-500",
        title: "Breakfast"
    },
    {
        image: "@/assets/categories/breakfast.svg",
        bgColor: "bg-gradient-to-t from-transparent via-green-500 to-green-500",
        title: "Vegan"
    },
    {
        image: "@/assets/categories/breakfast.svg",
        bgColor: "bg-gradient-to-t from-transparent via-green-500 to-green-500",
        title: "Meat"
    },
    {
        image: "@/assets/categories/breakfast.svg",
        bgColor: "bg-gradient-to-t from-transparent via-green-500 to-green-500",
        title: "Dessert"
    },
    {
        image: "@/assets/categories/breakfast.svg",
        bgColor: "bg-gradient-to-t from-transparent via-green-500 to-green-500",
        title: "Lunch"
    },
    {
        image: "@/assets/categories/breakfast.svg",
        bgColor: "bg-gradient-to-t from-transparent via-green-500 to-green-500",
        title: "Chocolate"
    },
]

export { navLinks, categoryPlaceholders, socialMedia, categoriesList }