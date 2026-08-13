import { Link } from "react-router";

import Author from "@/components/ui/author/Author";
import { getBlogPostPath } from "@/app/router/paths";
import { formatDisplayDate } from "@/utils/formatDate";

import styles from "./BlogCard.module.scss";

function BlogCard({ id, title, description, image, author, date }) {
    return (
        <article className={styles.card}>
            <Link to={getBlogPostPath(id)} className={styles.link}>
                <img className={styles.image} src={image} alt={title} />
                <div className={styles.body}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Author
                        avatar={author?.photo}
                        title={author?.username}
                        date={formatDisplayDate(date)}
                    />
                </div>
            </Link>
        </article>
    );
}

export default BlogCard;
