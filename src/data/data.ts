import { NavLink, SocialMediaLink } from "@/interfaces/links/Links";
import { Category } from "@/interfaces/category/Category";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
import { CheckoutInsta } from "@/interfaces/checkoutInsta/CheckoutInsta";

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
        image: require("../assets/categories/breakfast.svg"),
        bgColor: "linear-gradient(180deg, rgba(112, 130, 70, 0.00) 0%, rgba(112, 130, 70, 0.10) 100%",
        title: "Breakfast"
    },
    {
        image: require("../assets/categories/vegan.svg"),
        bgColor: "linear-gradient(180deg, rgba(108, 198, 63, 0.00) 0%, rgba(108, 198, 63, 0.10) 100%",
        title: "Vegan"
    },
    {
        image: require("../assets/categories/meat.svg"),
        bgColor: "linear-gradient(180deg, rgba(204, 38, 27, 0.00) 0%, rgba(204, 38, 27, 0.10) 100%",
        title: "Meat"
    },
    {
        image: require("../assets/categories/dessert.svg"),
        bgColor: "linear-gradient(180deg, rgba(240, 158, 0, 0.00) 0%, rgba(240, 158, 0, 0.10) 100%",
        title: "Dessert"
    },
    {
        image: require("../assets/categories/lunch.svg"),
        bgColor: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%",
        title: "Lunch"
    },
    {
        image: require("../assets/categories/chocolate.svg"),
        bgColor: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%",
        title: "Chocolate"
    },
]

const checkoutInstagramImages: CheckoutInsta[] = [
    {
        id: 1,
        image: require("../assets/instagram/insta_post_1.png")
    },
    {
        id: 2,
        image: require("../assets/instagram/insta_post_2.png")
    },
    {
        id: 3,
        image: require("../assets/instagram/insta_post_3.png")
    },
    {
        id: 4,
        image: require("../assets/instagram/insta_post_4.png")
    },
]

export { navLinks, categoryPlaceholders, socialMedia, categoriesList, checkoutInstagramImages }