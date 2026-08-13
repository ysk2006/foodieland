import styles from "./RecipeMedia.module.scss";

const NUTRITION_LABELS = {
    calories: "Calories",
    totalFat: "Total Fat",
    protein: "Protein",
    carbohydrate: "Carbohydrate",
    cholesterol: "Cholesterol",
};

function RecipeMedia({ recipe }) {
    const rows = Object.entries(recipe.information ?? {});

    return (
        <section className={styles.media}>
            <img className={styles.image} src={recipe.image} alt={recipe.title} />
            <aside className={styles.nutrition}>
                <h2>Nutrition Information</h2>
                <ul>
                    {rows.map(([key, value]) => (
                        <li key={key}>
                            <span>{NUTRITION_LABELS[key] ?? key}</span>
                            <strong>
                                {value}
                                {key === "calories" ? " kcal" : " g"}
                            </strong>
                        </li>
                    ))}
                </ul>
                <p>
                    Nutrition values are estimates and may vary depending on
                    ingredients and serving size.
                </p>
            </aside>
        </section>
    );
}

export default RecipeMedia;
