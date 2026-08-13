import { Link } from "react-router";
import { Clock, CookingPot } from "lucide-react";
import { clsx } from "clsx";

import FavoriteButton from "@/components/ui/favorite-button/FavoriteButton";
import { getRecipePath } from "@/app/router/paths";

import styles from "./RecipeCard.module.scss";

function RecipeCard({
    id,
    title,
    category,
    time,
    image,
    isFavorite,
    onFavoriteChange,
    compact = false,
}) {
    return (
        <article
            className={clsx(styles.recipe__card, compact && styles.compact)}
        >
            <Link to={getRecipePath(id)} className={styles["recipe__card--link"]}>
                <div className={styles["recipe__card--top"]}>
                    <img
                        className={styles["recipe__card--image"]}
                        src={image}
                        alt={title}
                    />
                </div>
                <div className={styles["recipe__card--bottom"]}>
                    <div className={styles["recipe__card--text"]}>
                        <h3>{title}</h3>
                    </div>
                    <div className={styles["recipe__card--other"]}>
                        <div>
                            <Clock />
                            <span>{time} Minutes</span>
                        </div>
                        <div>
                            <CookingPot />
                            <span>{category}</span>
                        </div>
                    </div>
                </div>
            </Link>
            <FavoriteButton
                className={styles["recipe__card--favorite"]}
                isFavorite={isFavorite}
                onChange={onFavoriteChange}
            />
        </article>
    );
}

export default RecipeCard;
