import { useState } from "react";

import ChecklistItem from "@/components/ui/checklist/ChecklistItem";
import OtherRecipeCard from "@/components/ui/cards/other-recipe-card/OtherRecipeCard";

import styles from "./RecipeIngredients.module.scss";

function RecipeIngredients({ groups, otherRecipes }) {
    const [checked, setChecked] = useState({});

    const toggle = (key) => {
        setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className={styles.section}>
            <div className={styles.main}>
                <h2>Ingredients</h2>
                {Object.entries(groups ?? {}).map(([groupKey, group]) => (
                    <div key={groupKey} className={styles.group}>
                        <h3>{group.name}</h3>
                        {group.inner.map((item) => {
                            const key = `${groupKey}-${item.id}`;
                            return (
                                <ChecklistItem
                                    key={key}
                                    checked={Boolean(checked[key])}
                                    onChange={() => toggle(key)}
                                    label={item.text}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

            <aside className={styles.aside}>
                <h3>Other Recipe</h3>
                <div className={styles.list}>
                    {otherRecipes.map((recipe) => (
                        <OtherRecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            image={recipe.image}
                            author={recipe.author}
                        />
                    ))}
                </div>
            </aside>
        </section>
    );
}

export default RecipeIngredients;
