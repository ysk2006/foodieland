import { Link } from "react-router";

import { getRecipePath } from "@/app/router/paths";

import styles from "./OtherRecipeCard.module.scss";

function OtherRecipeCard({ id, title, image, author }) {
    return (
        <Link to={getRecipePath(id)} className={styles.card}>
            <img className={styles.image} src={image} alt={title} />
            <div className={styles.body}>
                <h4>{title}</h4>
                <span>By {author?.username ?? "Foodieland"}</span>
            </div>
        </Link>
    );
}

export default OtherRecipeCard;
