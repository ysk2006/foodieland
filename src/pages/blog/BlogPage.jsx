import { Link } from "react-router";

import SEO from "@/components/SEO";
import AuthorInfo from "@/components/author/AuthorInfo";
import { PATHS, getBlogPostPath } from "@/app/router/paths";
import { getUserById } from "@/data/mockUsers";
import { mockBlogs } from "@/data/mockBlogs";
import { usePageSEO } from "@/hooks/usePageSEO";

function BlogPage() {
  const seo = usePageSEO({
    title: "Блог",
    description: "Статьи и идеи от команды Foodieland",
    path: PATHS.BLOG,
    image: "/og-image.jpg",
    type: "website",
  });

  const posts = Object.values(mockBlogs).map((post) => ({
    ...post,
    author: getUserById(post.authorId),
  }));

  return (
    <>
      <SEO {...seo} />

      <div className="blog-page">
        <h1>Блог</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={getBlogPostPath(post.id)}>{post.title}</Link>
              <AuthorInfo author={post.author} date={post.date} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BlogPage;
