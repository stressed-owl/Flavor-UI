import { NavLink } from "@/interfaces/links/NavLink";

const navLinks: NavLink[] = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About",
        url: "/about"
    }
]

const categoryPlaceholders: string[] = ['Dessert', 'Vegetarian', 'German', 'Italian']

export { navLinks, categoryPlaceholders }