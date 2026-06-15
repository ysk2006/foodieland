import { Link, useParams } from "react-router";

import SEO from "@/components/SEO";
import AuthorInfo from "@/components/author/AuthorInfo";
import { PATHS, getRecipePath } from "@/app/router/paths";
import { getRecipeById } from "@/data/mockRecipes";
import { usePageSEO } from "@/hooks/usePageSEO";

function RecipePage() {
  const { recipeId } = useParams();
  const recipe = getRecipeById(recipeId);

  const seo = usePageSEO(
    recipe
      ? {
          title: recipe.title,
          description: recipe.description,
          path: getRecipePath(recipe.id),
          image: recipe.image,
          type: "article",
          recipeData: {
            title: recipe.title,
            image: recipe.image,
            author: recipe.author?.username ?? "Foodieland",
            datePublished: recipe.date,
            description: recipe.description,
            prepTime: "PT30M",
            cookTime: "PT45M",
            totalTime: "PT1H15M",
            servings: "4",
            ingredients: recipe.ingredients,
            instructions: recipe.steps.map((step) => ({
              "@type": "HowToStep",
              text: step,
            })),
            calories: "350 calories",
          },
        }
      : {
          title: "Рецепт не найден",
          description: "Запрашиваемый рецепт не существует",
          path: getRecipePath(recipeId),
          noIndex: true,
        },
  );

  if (!recipe) {
    return (
      <>
        <SEO {...seo} />
        <div className="recipe-page">
          <h1>Рецепт не найден</h1>
          <Link to={PATHS.RECIPES}>К списку рецептов</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO {...seo} />
      <article className="recipe-page">
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <AuthorInfo author={recipe.author} date={recipe.date} />
        <Link to={PATHS.RECIPES}>← К списку рецептов</Link>
      </article>
    </>
  );
}

export default RecipePage;
