import { useMemo } from "react";

export function usePagedList(
    items,
    { page, pageSize, query, category, categoryKey = "tag" },
) {
    return useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        const filtered = items.filter((item) => {
            const matchesQuery =
                !normalizedQuery ||
                [item.title, item.description, item.tag, item.category]
                    .filter(Boolean)
                    .some((value) =>
                        String(value).toLowerCase().includes(normalizedQuery),
                    );

            const matchesCategory =
                !category || item[categoryKey] === category;

            return matchesQuery && matchesCategory;
        });

        const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
        const currentPage = Math.min(Math.max(page, 1), totalPages);
        const start = (currentPage - 1) * pageSize;

        return {
            items: filtered.slice(start, start + pageSize),
            total: filtered.length,
            totalPages,
            currentPage,
        };
    }, [items, page, pageSize, query, category, categoryKey]);
}
