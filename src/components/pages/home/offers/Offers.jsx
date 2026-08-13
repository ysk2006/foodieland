import { getRecipeCards } from "@/data/mockRecipe";
import RecipeCard from "@/components/ui/cards/recipe-card/RecipeCard";

import styles from "./Offers.module.scss";

function Offers() {
    return (
        <section className={styles.offers}>
            <div className={styles.offers__header}>
                <h2>
                    Try this delicious recipe
                    <br />
                    to make your day
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut
                    enim ad minim
                </p>
            </div>
            <div className={styles.offers__grid}>
                {getRecipeCards().slice(-4).map((recipe) => (
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

export default Offers;
