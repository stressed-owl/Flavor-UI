import { NavLink, SocialMediaLink } from "@/interfaces/links/Links";
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

export { navLinks, categoryPlaceholders, socialMedia }