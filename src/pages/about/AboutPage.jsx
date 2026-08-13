import SEO from "@/components/SEO";
import Newsletter from "@/components/pages/home/newsletter/Newsletter";
import RecipeRelated from "@/components/pages/recipe/related/RecipeRelated";
import { PATHS } from "@/app/router/paths";
import { aboutContent } from "@/data/mockAbout";
import { getRecipeCards } from "@/data/mockRecipe";
import { usePageSEO } from "@/hooks/usePageSEO";

import styles from "./AboutPage.module.scss";

function AboutPage() {
    const seo = usePageSEO({
        title: "About us",
        description:
            "Meet Foodieland — a kitchen for simple recipes, honest stories and cooking that feels at home.",
        path: PATHS.ABOUT,
        image: aboutContent.image,
        type: "website",
    });

    const recipes = getRecipeCards().slice(0, 4);

    return (
        <>
            <SEO {...seo} />
            <div className={styles.page}>
                <header className={styles.hero}>
                    <h1>{aboutContent.title}</h1>
                    <p>{aboutContent.lead}</p>
                </header>

                <img
                    className={styles.cover}
                    src={aboutContent.image}
                    alt="Cooking together in the Foodieland kitchen"
                />

                <section className={styles.story}>
                    {aboutContent.story.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </section>

                <section className={styles.values}>
                    {aboutContent.values.map((value) => (
                        <article key={value.id} className={styles.value}>
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </article>
                    ))}
                </section>

                <section className={styles.team}>
                    <h2>Our team</h2>
                    <div className={styles.teamGrid}>
                        {aboutContent.team.map((member) => (
                            <article key={member.id} className={styles.member}>
                                <img src={member.photo} alt={member.name} />
                                <h3>{member.name}</h3>
                                <span>{member.role}</span>
                            </article>
                        ))}
                    </div>
                </section>

                <Newsletter />
                <RecipeRelated
                    recipes={recipes}
                    title="Check out the delicious recipe"
                />
            </div>
        </>
    );
}

export default AboutPage;
