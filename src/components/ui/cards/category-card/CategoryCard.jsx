import { Link } from "react-router";

import styles from "./CategoryCard.module.scss";

function CategoryCard({ id, name, image }) {
    return (
        <Link to={"/"} className={styles.category__card} key={id}>
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
