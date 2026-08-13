import { Link } from "react-router";

import { PATHS } from "@/app/router/paths";

import styles from "./CategoryCard.module.scss";

function CategoryCard({ name, image }) {
    return (
        <Link
            to={`${PATHS.RECIPES}?category=${encodeURIComponent(name)}`}
            className={styles.category__card}
        >
            <div className={styles.category__imageWrapper}>
                <img
                    className={styles.category__image}
                    src={image}
                    alt={name}
                />
                <img
                    className={styles.category__shadow}
                    src={image}
                    alt=""
                    aria-hidden="true"
                />
            </div>
            <div className={styles.category__name}>
                <span>{name}</span>
            </div>
        </Link>
    );
}

export default CategoryCard;
