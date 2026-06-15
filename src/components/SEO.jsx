import { Helmet } from "react-helmet-async";

import {
  SITE_NAME,
  getCanonicalUrl,
  getOgImageUrl,
  getSiteUrl,
} from "@/config/site";

const SEO = ({
  title,
  description,
  image,
  path = "/",
  type = "website",
  recipeData = null,
  noIndex = false,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = getCanonicalUrl(path);
  const ogImage = image?.startsWith("http") ? image : getOgImageUrl(image);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {recipeData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Recipe",
            name: recipeData.title,
            image: recipeData.image?.startsWith("http")
              ? recipeData.image
              : `${getSiteUrl()}${recipeData.image}`,
            author: {
              "@type": "Person",
              name: recipeData.author,
            },
            datePublished: recipeData.datePublished,
            description: recipeData.description,
            prepTime: recipeData.prepTime,
            cookTime: recipeData.cookTime,
            totalTime: recipeData.totalTime,
            recipeYield: recipeData.servings,
            recipeIngredient: recipeData.ingredients,
            recipeInstructions: recipeData.instructions,
            nutrition: {
              "@type": "NutritionInformation",
              calories: recipeData.calories,
            },
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
