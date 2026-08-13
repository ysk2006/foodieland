import { getRecipeCards } from "@/data/mockRecipe";
import RecipeCard from "@/components/ui/cards/recipe-card/RecipeCard";

import styles from "./Recipes.module.scss";

function Recipes() {
    return (
        <section className={styles.recipes__section}>
            <div className={styles.recipes__text}>
                <h2 className={styles["recipes__text--title"]}>
                    Simple and tasty recipes
                </h2>
                <div className={styles["recipes__text--description"]}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim{" "}
                    </p>
                </div>
            </div>
            <div className={styles.recipes__wrapper}>
                {getRecipeCards(9).map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        time={recipe.time}
                        image={recipe.image}
                        category={recipe.category}
                    />
                ))}
            </div>
        </section>
    );
}

export default Recipes;
