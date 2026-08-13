export function formatDisplayDate(value) {
    if (!value) return "";

    if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
        const date = new Date(`${value}T00:00:00`);
        if (Number.isNaN(date.getTime())) return value;

        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    return value;
}
