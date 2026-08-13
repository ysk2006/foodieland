import { useEffect } from "react";
import { Link, useParams } from "react-router";

import SEO from "@/components/SEO";
import Author from "@/components/ui/author/Author";
import OtherRecipeCard from "@/components/ui/cards/other-recipe-card/OtherRecipeCard";
import Newsletter from "@/components/pages/home/newsletter/Newsletter";
import { PATHS, getBlogPostPath } from "@/app/router/paths";
import { getBlogPostById, getRelatedBlogPosts } from "@/data/mockBlogs";
import { getOtherRecipes } from "@/data/mockRecipe";
import { usePageSEO } from "@/hooks/usePageSEO";
import { formatDisplayDate } from "@/utils/formatDate";

import styles from "./BlogPostPage.module.scss";

function BlogPostPage() {
    const { postId } = useParams();
    const post = getBlogPostById(postId);
    const relatedPosts = post ? getRelatedBlogPosts(post.id, 3) : [];
    const otherRecipes = getOtherRecipes(null, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [postId]);

    const seo = usePageSEO(
        post
            ? {
                  title: post.title,
                  description: post.description,
                  path: getBlogPostPath(post.id),
                  image: post.image || "/jpg/hero-1.jpg",
                  type: "article",
              }
            : {
                  title: "Пост в блоге не найден",
                  description: "Запрашиваемый пост не существует в нашем блоге",
                  path: getBlogPostPath(postId),
                  noIndex: true,
              },
    );

    if (!post) {
        return (
            <>
                <SEO {...seo} />
                <div className={styles.missing}>
                    <h1>Пост не найден</h1>
                    <Link to={PATHS.BLOG}>К блогу</Link>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO {...seo} />
            <article className={styles.page}>
                <header className={styles.header}>
                    <h1>{post.title}</h1>
                    <Author
                        avatar={post.author?.photo}
                        title={post.author?.username}
                        date={formatDisplayDate(post.date)}
                    />
                </header>

                <img className={styles.hero} src={post.image} alt={post.title} />

                <div className={styles.layout}>
                    <div className={styles.content}>
                        {post.content?.map((block, index) =>
                            block.type === "h2" ? (
                                <h2 key={index}>{block.text}</h2>
                            ) : (
                                <p key={index}>{block.text}</p>
                            ),
                        )}
                    </div>

                    <aside className={styles.aside}>
                        <h3>Tasty Recipes</h3>
                        <div className={styles.recipes}>
                            {otherRecipes.map((recipe) => (
                                <OtherRecipeCard
                                    key={recipe.id}
                                    id={recipe.id}
                                    title={recipe.title}
                                    image={recipe.image}
                                    author={recipe.author}
                                />
                            ))}
                        </div>
                    </aside>
                </div>

                <section className={styles.related}>
                    <h2>More from the blog</h2>
                    <ul>
                        {relatedPosts.map((item) => (
                            <li key={item.id}>
                                <Link to={getBlogPostPath(item.id)}>
                                    {item.title}
                                </Link>
                                <span>{formatDisplayDate(item.date)}</span>
                            </li>
                        ))}
                    </ul>
                    <Link className={styles.back} to={PATHS.BLOG}>
                        ← All articles
                    </Link>
                </section>

                <Newsletter />
            </article>
        </>
    );
}

export default BlogPostPage;
