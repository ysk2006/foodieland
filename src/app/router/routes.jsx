import { lazy } from "react";

import RootLayout from "@/layouts/RootLayout";
import { PATHS } from "./paths";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const RecipesPage = lazy(() => import("@/pages/recipes/RecipesPage"));
const RecipePage = lazy(() => import("@/pages/recipe/RecipePage"));
const BlogPage = lazy(() => import("@/pages/blog/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/blog-post/BlogPostPage"));
const ContactsPage = lazy(() => import("@/pages/contacts/ContactsPage"));
const NotFoundPage = lazy(() => import("@/pages/not-found/NotFoundPage"));

export const routes = [
  {
    path: PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.RECIPES,
        element: <RecipesPage />,
      },
      {
        path: PATHS.RECIPE,
        element: <RecipePage />,
      },
      {
        path: PATHS.BLOG,
        element: <BlogPage />,
      },
      {
        path: PATHS.BLOG_POST,
        element: <BlogPostPage />,
      },
      {
        path: PATHS.CONTACTS,
        element: <ContactsPage />,
      },
      {
        path: PATHS.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
];
