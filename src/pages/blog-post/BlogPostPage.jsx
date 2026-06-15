import { Link, useParams } from "react-router";

import SEO from "@/components/SEO";
import AuthorInfo from "@/components/author/AuthorInfo";
import { PATHS, getBlogPostPath } from "@/app/router/paths";
import { getBlogPostById } from "@/data/mockBlogs";
import { usePageSEO } from "@/hooks/usePageSEO";

function BlogPostPage() {
  const { postId } = useParams();
  const post = getBlogPostById(postId);

  const seo = usePageSEO(
    post
      ? {
          title: post.title,
          description: post.description,
          path: getBlogPostPath(post.id),
          image: post.image || "/og-image.jpg",
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
        <div className="blog-post-page">
          <h1>Пост не найден</h1>
          <Link to={PATHS.BLOG}>К блогу</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO {...seo} />

      <article className="blog-post-page">
        {post.image && (
          <img
            className="blog-post-page__image"
            src={post.image}
            alt={post.title}
          />
        )}

        <h1>{post.title}</h1>
        <p>{post.description}</p>

        <AuthorInfo author={post.author} date={post.date} />

        <Link to={PATHS.BLOG}>← К блогу</Link>
      </article>
    </>
  );
}

export default BlogPostPage;
