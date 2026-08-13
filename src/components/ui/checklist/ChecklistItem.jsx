import { clsx } from "clsx";

import styles from "./ChecklistItem.module.scss";

function ChecklistItem({
    checked,
    onChange,
    label,
    description,
    image,
    index,
}) {
    return (
        <label className={clsx(styles.item, checked && styles.checked)}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={styles.input}
            />
            <span className={styles.box} aria-hidden="true" />
            <span className={styles.body}>
                {index != null && (
                    <span className={styles.index}>{index}</span>
                )}
                <span className={styles.content}>
                    <span className={styles.label}>{label}</span>
                    {description && (
                        <span className={styles.description}>{description}</span>
                    )}
                    {image && (
                        <img className={styles.image} src={image} alt="" />
                    )}
                </span>
            </span>
        </label>
    );
}

export default ChecklistItem;
