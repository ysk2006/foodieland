import { clsx } from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./Pagination.module.scss";

function getPages(current, total) {
    if (total <= 7) {
        return Array.from({ length: total }, (_, index) => index + 1);
    }

    const pages = [1];
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    if (start > 2) pages.push("…");
    for (let page = start; page <= end; page += 1) pages.push(page);
    if (end < total - 1) pages.push("…");
    pages.push(total);

    return pages;
}

function Pagination({ page, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = getPages(page, totalPages);

    return (
        <nav className={styles.pagination} aria-label="Pagination">
            <button
                type="button"
                className={styles.arrow}
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
            >
                <ChevronLeft size={18} />
            </button>
            {pages.map((item, index) =>
                item === "…" ? (
                    <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                        …
                    </span>
                ) : (
                    <button
                        key={item}
                        type="button"
                        className={clsx(
                            styles.page,
                            item === page && styles.active,
                        )}
                        onClick={() => onPageChange(item)}
                        aria-current={item === page ? "page" : undefined}
                    >
                        {item}
                    </button>
                ),
            )}
            <button
                type="button"
                className={styles.arrow}
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
            >
                <ChevronRight size={18} />
            </button>
        </nav>
    );
}

export default Pagination;
