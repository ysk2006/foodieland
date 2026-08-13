import { useState } from "react";

import ChecklistItem from "@/components/ui/checklist/ChecklistItem";

import styles from "./RecipeDirections.module.scss";

function RecipeDirections({ directions }) {
    const [checked, setChecked] = useState({});

    return (
        <section className={styles.section}>
            <h2>Directions</h2>
            {(directions ?? []).map((step, index) => (
                <ChecklistItem
                    key={step.id}
                    index={`${index + 1}.`}
                    checked={Boolean(checked[step.id])}
                    onChange={() =>
                        setChecked((prev) => ({
                            ...prev,
                            [step.id]: !prev[step.id],
                        }))
                    }
                    label={step.title}
                    description={step.description}
                    image={step.isHaveImage ? step.image : undefined}
                />
            ))}
        </section>
    );
}

export default RecipeDirections;
