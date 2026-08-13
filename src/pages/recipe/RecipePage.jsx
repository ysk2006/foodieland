import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import SEO from "@/components/SEO";
import Newsletter from "@/components/pages/home/newsletter/Newsletter";
import RecipeHeader from "@/components/pages/recipe/header/RecipeHeader";
import RecipeMedia from "@/components/pages/recipe/media/RecipeMedia";
import RecipeIngredients from "@/components/pages/recipe/ingredients/RecipeIngredients";
import RecipeDirections from "@/components/pages/recipe/directions/RecipeDirections";
import RecipeRelated from "@/components/pages/recipe/related/RecipeRelated";
import { PATHS, getRecipePath } from "@/app/router/paths";
import {
    getOtherRecipes,
    getRecipeById,
    getRecipeCards,
    getRecipeIngredientList,
} from "@/data/mockRecipe";
import { usePageSEO } from "@/hooks/usePageSEO";

import styles from "./RecipePage.module.scss";

function RecipePage() {
    const { recipeId } = useParams();
    const recipe = getRecipeById(recipeId);
    const [shareLabel, setShareLabel] = useState("Share");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [recipeId]);

    const ingredients = recipe ? getRecipeIngredientList(recipe) : [];

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
                      prepTime: `PT${recipe.prepTime}M`,
                      cookTime: `PT${recipe.cookTime}M`,
                      totalTime: `PT${Number(recipe.prepTime) + Number(recipe.cookTime)}M`,
                      servings: "4",
                      ingredients,
                      instructions: recipe.directions.map((step) => ({
                          "@type": "HowToStep",
                          name: step.title,
                          text: step.description,
                      })),
                      calories: `${recipe.information?.calories} calories`,
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
                <div className={styles.missing}>
                    <h1>Рецепт не найден</h1>
                    <Link to={PATHS.RECIPES}>К списку рецептов</Link>
                </div>
            </>
        );
    }

    const handlePrint = () => window.print();

    const handleShare = async () => {
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({ title: recipe.title, url });
                return;
            } catch {
                // fallback to clipboard
            }
        }

        try {
            await navigator.clipboard.writeText(url);
            setShareLabel("Copied");
            window.setTimeout(() => setShareLabel("Share"), 2000);
        } catch {
            setShareLabel("Share");
        }
    };

    const otherRecipes = getOtherRecipes(recipe.id, 3);
    const related = getRecipeCards()
        .filter((item) => item.id !== recipe.id)
        .slice(0, 4);

    return (
        <>
            <SEO {...seo} />
            <article className={styles.page}>
                <RecipeHeader
                    recipe={recipe}
                    onPrint={handlePrint}
                    onShare={handleShare}
                    shareLabel={shareLabel}
                />
                <RecipeMedia recipe={recipe} />
                <p className={styles.description}>{recipe.description}</p>
                <RecipeIngredients
                    groups={recipe.ingredients}
                    otherRecipes={otherRecipes}
                />
                <RecipeDirections directions={recipe.directions} />
                <Newsletter />
                <RecipeRelated recipes={related} />
            </article>
        </>
    );
}

export default RecipePage;
