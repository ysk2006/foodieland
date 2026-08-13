import { clsx } from "clsx";

import styles from "./FilterChips.module.scss";

function FilterChips({ items, value, onChange, allLabel = "All" }) {
    return (
        <div className={styles.chips}>
            <button
                type="button"
                className={clsx(styles.chip, !value && styles.active)}
                onClick={() => onChange("")}
            >
                {allLabel}
            </button>
            {items.map((item) => (
                <button
                    key={item}
                    type="button"
                    className={clsx(styles.chip, value === item && styles.active)}
                    onClick={() => onChange(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

export default FilterChips;
