import { useState } from "react";
import { Heart } from "lucide-react";
import { clsx } from "clsx";

import styles from "./FavoriteButton.module.scss";

function FavoriteButton({
    isFavorite,
    defaultFavorite = false,
    onChange,
    className = "",
    ...rest
}) {
    const isControlled = isFavorite !== undefined;
    const [internalFavorite, setInternalFavorite] = useState(defaultFavorite);
    const favorite = isControlled ? isFavorite : internalFavorite;

    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const nextFavorite = !favorite;

        if (!isControlled) {
            setInternalFavorite(nextFavorite);
        }

        onChange?.(nextFavorite);
    };

    return (
        <button
            type="button"
            className={clsx(
                styles.favorite,
                favorite && styles.active,
                className,
            )}
            onClick={handleClick}
            aria-pressed={favorite}
            aria-label={
                favorite ? "Remove from favorites" : "Add to favorites"
            }
            {...rest}
        >
            <Heart
                size={20}
                strokeWidth={2}
                fill={favorite ? "currentColor" : "none"}
            />
        </button>
    );
}

export default FavoriteButton;
