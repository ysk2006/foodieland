import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

import SEO from "@/components/SEO";
import CatalogHero from "@/components/ui/catalog-hero/CatalogHero";
import FilterChips from "@/components/ui/filter-chips/FilterChips";
import Pagination from "@/components/ui/pagination/Pagination";
import RecipeCard from "@/components/ui/cards/recipe-card/RecipeCard";
import Newsletter from "@/components/pages/home/newsletter/Newsletter";
import { PATHS } from "@/app/router/paths";
import {
    getRecipeCards,
    getRecipeCategories,
} from "@/data/mockRecipe";
import { usePageSEO } from "@/hooks/usePageSEO";
import { usePagedList } from "@/hooks/usePagedList";

import styles from "./RecipesPage.module.scss";

const PAGE_SIZE = 9;

function RecipesPage() {
    const seo = usePageSEO({
        title: "Recipes",
        description:
            "Browse the Foodieland collection of simple, tasty recipes for every day.",
        path: PATHS.RECIPES,
        image: "/jpg/recipe-1.jpg",
        type: "website",
    });

    const recipes = useMemo(() => getRecipeCards(), []);
    const categories = useMemo(() => getRecipeCategories(), []);
    const [params, setParams] = useSearchParams();

    const query = params.get("q") ?? "";
    const category = params.get("category") ?? "";
    const page = Number(params.get("page") || 1);

    const updateParams = useCallback(
        (next) => {
            const updated = new URLSearchParams(params);
            Object.entries(next).forEach(([key, value]) => {
                if (value) updated.set(key, String(value));
                else updated.delete(key);
            });
            setParams(updated, { replace: true });
        },
        [params, setParams],
    );

    const paged = usePagedList(recipes, {
        page,
        pageSize: PAGE_SIZE,
        query,
        category,
        categoryKey: "category",
    });

    return (
        <>
            <SEO {...seo} />
            <div className={styles.page}>
                <CatalogHero
                    title="Recipes"
                    description="Find something delicious for breakfast, lunch or a slow weekend dinner. Filter by category or search by name."
                    searchId="recipes-search"
                    searchValue={query}
                    onSearch={(value) =>
                        updateParams({ q: value, page: 1, category })
                    }
                    placeholder="Search recipes..."
                />

                <div className={styles.filters}>
                    <FilterChips
                        items={categories}
                        value={category}
                        onChange={(value) =>
                            updateParams({ category: value, page: 1, q: query })
                        }
                    />
                </div>

                {paged.items.length ? (
                    <div className={styles.grid}>
                        {paged.items.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                id={recipe.id}
                                title={recipe.title}
                                time={recipe.time}
                                image={recipe.image}
                                category={recipe.category}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>No recipes match your search.</p>
                )}

                <Pagination
                    page={paged.currentPage}
                    totalPages={paged.totalPages}
                    onPageChange={(nextPage) =>
                        updateParams({
                            page: nextPage > 1 ? nextPage : "",
                            q: query,
                            category,
                        })
                    }
                />

                <Newsletter />
            </div>
        </>
    );
}

export default RecipesPage;
