export const PATHS = {
  HOME: "/",
  RECIPES: "/recipes",
  RECIPE: "/recipes/:recipeId",
  BLOG: "/blog",
  BLOG_POST: "/blog/:postId",
  CONTACTS: "/contacts",
  NOT_FOUND: "*",
};

export function getRecipePath(recipeId) {
  return `/recipes/${recipeId}`;
}

export function getBlogPostPath(postId) {
  return `/blog/${postId}`;
}
