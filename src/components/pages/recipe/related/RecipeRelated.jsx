import RecipeCard from "@/components/ui/cards/recipe-card/RecipeCard";

import styles from "./RecipeRelated.module.scss";

function RecipeRelated({
    recipes,
    title = "You may like these recipe too",
}) {
    if (!recipes?.length) return null;

    return (
        <section className={styles.section}>
            <h2>{title}</h2>
            <div className={styles.grid}>
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        time={recipe.time}
                        image={recipe.image}
                        category={recipe.category}
                        compact
                    />
                ))}
            </div>
        </section>
    );
}

export default RecipeRelated;
