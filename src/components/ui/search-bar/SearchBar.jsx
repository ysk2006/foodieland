import { Search } from "lucide-react";

import styles from "./SearchBar.module.scss";

function SearchBar({
    value,
    onChange,
    placeholder = "Search...",
    id = "search",
}) {
    return (
        <label className={styles.search} htmlFor={id}>
            <Search size={20} />
            <input
                id={id}
                type="search"
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
            />
        </label>
    );
}

export default SearchBar;
