import SEO from "@/components/SEO";
import { PATHS } from "@/app/router/paths";
import { usePageSEO } from "@/hooks/usePageSEO";

import Hero from "@/components/pages/home/hero/Hero";
import Categories from "@/components/pages/home/categories/Categories";
import Recipes from "@/components/pages/home/recipes/Recipes";
import Newsletter from "@/components/pages/home/newsletter/Newsletter";
import Instagram from "@/components/pages/home/instagram/Instagram";
import Offers from "@/components/pages/home/offers/Offers";
import Contact from "@/components/pages/home/contact/Contact";

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
                <Recipes />
                <Newsletter />
                <Instagram />
                <Offers />
                <Contact />
            </div>
        </>
    );
}

export default HomePage;
