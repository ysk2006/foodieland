import { Link } from "react-router";

import SEO from "@/components/SEO";
import { PATHS } from "@/app/router/paths";
import { usePageSEO } from "@/hooks/usePageSEO";

import Hero from "@/components/pages/home/hero/Hero";
import Categories from "@/components/pages/home/categories/Categories";

function HomePage() {
    const seo = usePageSEO({
        title: "Главная",
        description: "Откройте для себя мир вкусной еды с Foodieland",
        path: PATHS.HOME,
        image: "/og-image.jpg",
    });

    return (
        <>
            <SEO {...seo} />
            <div className="home-page">
                <Hero />
                <Categories />
            </div>
        </>
    );
}

export default HomePage;
