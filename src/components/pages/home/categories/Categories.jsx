import { Link } from "react-router";
import CategoryCard from "@/components/ui/cards/category-card/CategoryCard";

import { categoriesMockData } from "@/data/mockCategories";

import styles from "./Categories.module.scss";

function Categories() {
    return (
        <section className={styles.category}>
            <div className={styles.category__header}>
                <h2>Categories</h2>
                <Link className={styles.category__link}>
                    View All Categories
                </Link>
            </div>
            <div className={styles.category__body}>
                {categoriesMockData.map((caty) => (
                    <CategoryCard
                        id={caty.id}
                        name={caty.name}
                        image={caty.image}
                    />
                ))}
            </div>
        </section>
    );
}

export default Categories;
