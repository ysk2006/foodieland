import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

import SEO from "@/components/SEO";
import CatalogHero from "@/components/ui/catalog-hero/CatalogHero";
import FilterChips from "@/components/ui/filter-chips/FilterChips";
import Pagination from "@/components/ui/pagination/Pagination";
import BlogCard from "@/components/ui/cards/blog-card/BlogCard";
import OtherRecipeCard from "@/components/ui/cards/other-recipe-card/OtherRecipeCard";
import Newsletter from "@/components/pages/home/newsletter/Newsletter";
import { PATHS } from "@/app/router/paths";
import { getBlogCategories, getBlogPosts } from "@/data/mockBlogs";
import { getOtherRecipes } from "@/data/mockRecipe";
import { usePageSEO } from "@/hooks/usePageSEO";
import { usePagedList } from "@/hooks/usePagedList";

import styles from "./BlogPage.module.scss";

const PAGE_SIZE = 5;

function BlogPage() {
    const seo = usePageSEO({
        title: "Blog",
        description: "Stories, ideas and kitchen notes from the Foodieland team.",
        path: PATHS.BLOG,
        image: "/jpg/hero-1.jpg",
        type: "website",
    });

    const posts = useMemo(() => getBlogPosts(), []);
    const categories = useMemo(() => getBlogCategories(), []);
    const tastyRecipes = useMemo(() => getOtherRecipes(null, 4), []);
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

    const paged = usePagedList(posts, {
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
                    title="Blog & Article"
                    description="Notes from the kitchen: faster breakfasts, better roasts, and the little habits that make cooking feel easier."
                    searchId="blog-search"
                    searchValue={query}
                    onSearch={(value) =>
                        updateParams({ q: value, page: 1, category })
                    }
                    placeholder="Search articles..."
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

                <div className={styles.layout}>
                    <div className={styles.list}>
                        {paged.items.length ? (
                            paged.items.map((post) => (
                                <BlogCard key={post.id} {...post} />
                            ))
                        ) : (
                            <p className={styles.empty}>
                                No articles match your search.
                            </p>
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
                    </div>

                    <aside className={styles.aside}>
                        <h3>Tasty Recipes</h3>
                        <div className={styles.recipes}>
                            {tastyRecipes.map((recipe) => (
                                <OtherRecipeCard
                                    key={recipe.id}
                                    id={recipe.id}
                                    title={recipe.title}
                                    image={recipe.image}
                                    author={recipe.author}
                                />
                            ))}
                        </div>
                        <div className={styles.promo}>
                            <p>Don’t forget to eat healthy food</p>
                            <span>www.foodieland.com</span>
                        </div>
                    </aside>
                </div>

                <Newsletter />
            </div>
        </>
    );
}

export default BlogPage;
