import styles from "./CategoryCard.module.scss";

function CategoryCard({ id, name, image }) {
    return (
        <div className={styles.category__card} key={id}>
            <div>
                <img src={image} alt={name} />
                <img src={image} alt="shadow" />
            </div>
            <div>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default CategoryCard;
