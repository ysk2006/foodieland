import { useMemo } from "react";

/**
 * Подготавливает SEO-пропсы для страницы.
 *
 * @example
 * const seo = usePageSEO({
 *   title: "Рецепты",
 *   description: "Коллекция рецептов",
 *   path: PATHS.RECIPES,
 *   image: "/og-image.jpg",
 * });
 *
 * return (
 *   <>
 *     <SEO {...seo} />
 *     ...
 *   </>
 * );
 */
export function usePageSEO({
  title,
  description,
  path = "/",
  image,
  type = "website",
  recipeData = null,
  noIndex = false,
}) {
  return useMemo(
    () => ({
      title,
      description,
      path,
      image,
      type,
      recipeData,
      noIndex,
    }),
    [title, description, path, image, type, recipeData, noIndex],
  );
}
