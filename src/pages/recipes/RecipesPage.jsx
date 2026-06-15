import { Link } from "react-router";

import SEO from "@/components/SEO";
import AuthorInfo from "@/components/author/AuthorInfo";
import { PATHS, getRecipePath } from "@/app/router/paths";
import { getRecipeById, mockRecipes } from "@/data/mockRecipes";
import { usePageSEO } from "@/hooks/usePageSEO";

function RecipesPage() {
  const seo = usePageSEO({
    title: "Рецепты",
    description:
      "Коллекция вкусных рецептов от Foodieland: простые блюда на каждый день и идеи для здорового питания",
    path: PATHS.RECIPES,
    image: "/og-image.jpg",
    type: "website",
  });

  const recipes = Object.keys(mockRecipes).map((id) => getRecipeById(id));

  return (
    <>
      <SEO {...seo} />

      <div className="recipes-page">
        <h1>Рецепты</h1>
        <p>Выберите рецепт из коллекции</p>

        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={getRecipePath(recipe.id)}>{recipe.title}</Link>
              <AuthorInfo author={recipe.author} date={recipe.date} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RecipesPage;
