import { Clock, CookingPot, Printer, Share2, Timer } from "lucide-react";

import Author from "@/components/ui/author/Author";
import { formatDisplayDate } from "@/utils/formatDate";

import styles from "./RecipeHeader.module.scss";

function RecipeHeader({ recipe, onPrint, onShare, shareLabel }) {
    const meta = [
        {
            icon: Timer,
            label: "Prep Time",
            value: `${recipe.prepTime} Minutes`,
        },
        {
            icon: Clock,
            label: "Cook Time",
            value: `${recipe.cookTime} Minutes`,
        },
        {
            icon: CookingPot,
            label: "Category",
            value: recipe.tag,
        },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.main}>
                <h1>{recipe.title}</h1>
                <div className={styles.meta}>
                    <Author
                        avatar={recipe.author?.photo}
                        title={recipe.author?.username}
                        date={formatDisplayDate(recipe.date)}
                    />
                    {meta.map(({ icon: Icon, label, value }) => (
                        <div key={label} className={styles.metaItem}>
                            <Icon size={22} />
                            <div>
                                <span>{label}</span>
                                <strong>{value}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.actions}>
                <button type="button" onClick={onPrint}>
                    <span className={styles.icon}>
                        <Printer size={22} />
                    </span>
                    Print
                </button>
                <button type="button" onClick={onShare}>
                    <span className={styles.icon}>
                        <Share2 size={22} />
                    </span>
                    {shareLabel}
                </button>
            </div>
        </header>
    );
}

export default RecipeHeader;
