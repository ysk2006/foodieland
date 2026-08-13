import SearchBar from "@/components/ui/search-bar/SearchBar";

import styles from "./CatalogHero.module.scss";

function CatalogHero({ title, description, searchValue, onSearch, searchId, placeholder }) {
    return (
        <header className={styles.hero}>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            <SearchBar
                id={searchId}
                value={searchValue}
                onChange={onSearch}
                placeholder={placeholder}
            />
        </header>
    );
}

export default CatalogHero;
