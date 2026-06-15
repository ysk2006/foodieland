import { Link } from "react-router";

import SEO from "@/components/SEO";
import { PATHS } from "@/app/router/paths";
import { usePageSEO } from "@/hooks/usePageSEO";

import Hero from "@/components/pages/home/hero/Hero";

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
      </div>
    </>
  );
}

export default HomePage;
