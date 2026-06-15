import { getUserById } from "./mockUsers";

export const mockRecipes = {
  1: {
    id: "1",
    title: "Паста карбонара",
    description: "Классический итальянский рецепт с беконом и сливочным соусом",
    image: "/og-image.jpg",
    time: "30",
    tag: "Healthy",
    authorId: "1",
    date: "2024-06-01",
    ingredients: ["спагетти", "бекон", "яйца", "пармезан", "чеснок"],
    steps: [
      "Отварите пасту до состояния al dente",
      "Обжарьте бекон до хрустящей корочки",
      "Смешайте яйца с тертым пармезаном",
      "Соедините пасту с соусом и подавайте сразу",
    ],
  },
};

export function getRecipeById(recipeId) {
  const recipe = mockRecipes[recipeId];
  if (!recipe) return null;

  return {
    ...recipe,
    author: getUserById(recipe.authorId),
  };
}
