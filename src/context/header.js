import { PATHS } from "@/app/router/paths";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Instagram from "@/assets/icons/instagram.svg";

const HeaderContactsItems = [
  {
    id: 0,
    name: "facebook",
    url: "/facebook.com",
    icon: Facebook,
  },
  {
    id: 1,
    name: "twitter",
    url: "/twitter.com",
    icon: Twitter,
  },
  {
    id: 2,
    name: "instagram",
    url: "/instagram.com",
    icon: Instagram,
  },
];

const HeaderNavList = [
  {
    id: 0,
    name: "Home",
    link: PATHS.HOME,
  },
  {
    id: 1,
    name: "Recipes",
    link: PATHS.RECIPES,
  },
  {
    id: 2,
    name: "Blog",
    link: PATHS.BLOG,
  },
  {
    id: 3,
    name: "Contact",
    link: PATHS.CONTACTS,
  },
  {
    id: 4,
    name: "About us",
    link: "/about",
  },
];

export { HeaderNavList, HeaderContactsItems };
