import { getUserById } from "./mockUsers";

function ingredientGroup(name, items) {
    return {
        name,
        inner: items.map((text, id) => ({ id, text })),
    };
}

function direction(id, title, description, image = "") {
    return {
        id,
        title,
        description,
        isHaveImage: Boolean(image),
        image,
    };
}

export const mockRecipe = {
    1: {
        id: "1",
        title: "Health Japanese Fried Rice",
        description:
            "A lighter take on classic fried rice with tender chicken, vegetables and a savory soy glaze. Perfect for a weeknight dinner that still feels special.",
        image: "/jpg/recipe-1.jpg",
        cookTime: "15",
        prepTime: "15",
        tag: "Chicken",
        authorId: "1",
        date: "2022-03-15",
        information: {
            calories: "219.9",
            totalFat: "10.7",
            protein: "7.9",
            carbohydrate: "22.3",
            cholesterol: "37.4",
        },
        ingredients: {
            stepOne: ingredientGroup("For main dish", [
                "2 cups cooked Japanese rice, chilled",
                "200g chicken breast, diced",
                "1 cup mixed vegetables (carrot, peas, corn)",
                "2 eggs, lightly beaten",
                "2 spring onions, sliced",
            ]),
            stepTwo: ingredientGroup("For the sauce", [
                "2 tbsp low-sodium soy sauce",
                "1 tsp sesame oil",
                "1 tsp grated ginger",
            ]),
        },
        directions: [
            direction(
                0,
                "Prepare the rice and chicken",
                "Use day-old chilled rice so the grains stay separate. Season the chicken with salt and pepper, then sear in a hot pan until golden.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Stir-fry the vegetables",
                "Push the chicken aside, add vegetables and cook until just tender. Scramble the eggs in the same pan, then fold everything together.",
            ),
            direction(
                2,
                "Finish with the sauce",
                "Pour in the soy mixture, toss quickly over high heat, and finish with spring onions and sesame oil before serving.",
            ),
        ],
    },
    2: {
        id: "2",
        title: "Tomato basil pasta",
        description:
            "Ripe tomatoes, fresh basil and garlic tossed with al dente pasta. A simple Italian classic that comes together in minutes.",
        image: "/jpg/hero-1.jpg",
        cookTime: "20",
        prepTime: "10",
        tag: "Lunch",
        authorId: "2",
        date: "2022-04-02",
        information: {
            calories: "312.4",
            totalFat: "9.2",
            protein: "10.1",
            carbohydrate: "48.6",
            cholesterol: "12.0",
        },
        ingredients: {
            stepOne: ingredientGroup("For main dish", [
                "320g spaghetti or linguine",
                "4 ripe tomatoes, chopped",
                "3 garlic cloves, sliced",
                "A handful of fresh basil",
                "2 tbsp olive oil",
            ]),
            stepTwo: ingredientGroup("To finish", [
                "Sea salt and black pepper",
                "Grated parmesan, to serve",
            ]),
        },
        directions: [
            direction(
                0,
                "Boil the pasta",
                "Cook pasta in salted water until al dente. Reserve a cup of starchy water before draining.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Make the tomato sauce",
                "Warm olive oil, gently fry garlic, then add tomatoes and simmer until they break down into a sauce.",
            ),
            direction(
                2,
                "Toss and serve",
                "Combine pasta with the sauce, a splash of pasta water and torn basil. Finish with parmesan.",
            ),
        ],
    },
    3: {
        id: "3",
        title: "Roasted chicken with herbs",
        description:
            "Juicy roasted chicken with a crisp skin and a mix of rosemary, thyme and garlic. Comfort food that works for Sunday lunch or meal prep.",
        image: "/jpg/hero-2.jpg",
        cookTime: "45",
        prepTime: "15",
        tag: "Meat",
        authorId: "3",
        date: "2022-05-18",
        information: {
            calories: "420.0",
            totalFat: "24.5",
            protein: "38.2",
            carbohydrate: "4.1",
            cholesterol: "118.0",
        },
        ingredients: {
            stepOne: ingredientGroup("For the chicken", [
                "1 whole chicken, about 1.6kg",
                "4 garlic cloves",
                "2 tbsp olive oil",
                "Salt and freshly ground pepper",
            ]),
            stepTwo: ingredientGroup("Herb mix", [
                "2 sprigs rosemary",
                "4 sprigs thyme",
                "1 lemon, halved",
            ]),
        },
        directions: [
            direction(
                0,
                "Season the chicken",
                "Pat the chicken dry. Rub with oil, salt, pepper and crushed garlic. Stuff the cavity with herbs and lemon.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Roast until golden",
                "Roast at 200°C for about 45 minutes, or until the juices run clear and the skin is crisp.",
            ),
            direction(
                2,
                "Rest and carve",
                "Rest for 10 minutes before carving so the juices settle. Serve with pan drippings.",
            ),
        ],
    },
    4: {
        id: "4",
        title: "Skillet chicken with tomatoes",
        description:
            "One-pan chicken simmered with cherry tomatoes, olives and herbs. Bright, rustic and ready with almost no cleanup.",
        image: "/jpg/hero-3.jpg",
        cookTime: "30",
        prepTime: "10",
        tag: "Meat",
        authorId: "1",
        date: "2023-01-12",
        information: {
            calories: "365.2",
            totalFat: "18.4",
            protein: "32.0",
            carbohydrate: "12.8",
            cholesterol: "95.0",
        },
        ingredients: {
            stepOne: ingredientGroup("For main dish", [
                "4 chicken thighs, skin-on",
                "250g cherry tomatoes",
                "1 red onion, sliced",
                "2 tbsp olive oil",
            ]),
            stepTwo: ingredientGroup("For the sauce", [
                "80ml chicken stock",
                "1 tsp smoked paprika",
                "Fresh parsley, chopped",
            ]),
        },
        directions: [
            direction(
                0,
                "Sear the chicken",
                "Season the thighs and sear skin-side down until deeply golden. Set aside.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Build the skillet sauce",
                "Saute onion, add tomatoes and paprika, then deglaze with stock.",
            ),
            direction(
                2,
                "Simmer until cooked",
                "Return chicken to the pan and simmer until cooked through. Scatter parsley before serving.",
            ),
        ],
    },
    5: {
        id: "5",
        title: "Grilled herb chicken and vegetables",
        description:
            "Charred chicken and seasonal vegetables with a lemon-herb marinade. Light enough for lunch, satisfying enough for dinner.",
        image: "/jpg/hero-4.jpg",
        cookTime: "35",
        prepTime: "20",
        tag: "Lunch",
        authorId: "4",
        date: "2023-03-09",
        information: {
            calories: "298.6",
            totalFat: "12.1",
            protein: "29.4",
            carbohydrate: "16.2",
            cholesterol: "78.0",
        },
        ingredients: {
            stepOne: ingredientGroup("For the grill", [
                "2 chicken breasts",
                "1 zucchini, sliced",
                "1 bell pepper, cut into strips",
                "1 red onion, wedges",
            ]),
            stepTwo: ingredientGroup("Marinade", [
                "Juice of 1 lemon",
                "2 tbsp olive oil",
                "1 tsp dried oregano",
                "1 garlic clove, minced",
            ]),
        },
        directions: [
            direction(
                0,
                "Marinate the chicken",
                "Combine lemon, oil, oregano and garlic. Coat the chicken and rest for at least 15 minutes.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Grill the vegetables",
                "Toss vegetables in leftover marinade and grill until tender with charred edges.",
            ),
            direction(
                2,
                "Grill and slice",
                "Grill chicken until cooked through, rest briefly, then slice and serve with the vegetables.",
            ),
        ],
    },
    6: {
        id: "6",
        title: "Fresh Mediterranean salad bowl",
        description:
            "Crisp greens, juicy tomatoes, cucumber and feta with a bright lemon dressing. A balanced bowl for warm days.",
        image: "/jpg/hero-2.jpg",
        cookTime: "0",
        prepTime: "15",
        tag: "Vegan",
        authorId: "4",
        date: "2023-06-21",
        information: {
            calories: "186.0",
            totalFat: "11.3",
            protein: "6.4",
            carbohydrate: "14.9",
            cholesterol: "18.0",
        },
        ingredients: {
            stepOne: ingredientGroup("Salad", [
                "Mixed salad leaves",
                "1 cucumber, diced",
                "200g cherry tomatoes",
                "Kalamata olives",
                "Feta cheese (optional for vegan skip)",
            ]),
            stepTwo: ingredientGroup("Dressing", [
                "3 tbsp extra-virgin olive oil",
                "1 tbsp lemon juice",
                "1 tsp Dijon mustard",
                "Salt and pepper",
            ]),
        },
        directions: [
            direction(
                0,
                "Chop the vegetables",
                "Wash and dry the leaves. Dice cucumber and halve the tomatoes.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Whisk the dressing",
                "Shake oil, lemon and mustard until emulsified. Season to taste.",
            ),
            direction(
                2,
                "Assemble the bowl",
                "Layer greens, vegetables and olives. Drizzle dressing and finish with feta if using.",
            ),
        ],
    },
    7: {
        id: "7",
        title: "Classic beef burger with fries",
        description:
            "A juicy beef patty with melted cheese, pickles and a toasted bun, served with golden fries. Weekend energy on a plate.",
        image: "/jpg/hero-3.jpg",
        cookTime: "20",
        prepTime: "15",
        tag: "Meat",
        authorId: "2",
        date: "2023-08-04",
        information: {
            calories: "640.8",
            totalFat: "34.2",
            protein: "28.7",
            carbohydrate: "52.1",
            cholesterol: "96.0",
        },
        ingredients: {
            stepOne: ingredientGroup("Burger", [
                "2 beef burger patties",
                "2 brioche buns",
                "Cheddar slices",
                "Lettuce, tomato, pickles",
            ]),
            stepTwo: ingredientGroup("Fries", [
                "2 large potatoes",
                "Vegetable oil for frying",
                "Sea salt",
            ]),
        },
        directions: [
            direction(
                0,
                "Prepare the fries",
                "Cut potatoes into sticks, rinse and dry well. Fry until golden and season with salt.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Cook the patties",
                "Sear burgers in a hot pan, add cheese for the last minute so it melts.",
            ),
            direction(
                2,
                "Build the burger",
                "Toast the buns, stack lettuce, patty, tomato and pickles. Serve with fries.",
            ),
        ],
    },
    8: {
        id: "8",
        title: "Spicy delicious chicken wings",
        description:
            "Crispy baked wings tossed in a sticky spicy glaze. Ideal for sharing, game night or a casual dinner.",
        image: "/jpg/hero-1.jpg",
        cookTime: "30",
        prepTime: "10",
        tag: "Chicken",
        authorId: "2",
        date: "2022-03-15",
        information: {
            calories: "390.5",
            totalFat: "22.8",
            protein: "31.6",
            carbohydrate: "14.4",
            cholesterol: "110.0",
        },
        ingredients: {
            stepOne: ingredientGroup("Wings", [
                "1kg chicken wings",
                "1 tsp baking powder",
                "1 tsp salt",
                "1 tsp smoked paprika",
            ]),
            stepTwo: ingredientGroup("Spicy glaze", [
                "3 tbsp hot sauce",
                "2 tbsp honey",
                "1 tbsp butter",
                "1 garlic clove, minced",
            ]),
        },
        directions: [
            direction(
                0,
                "Dry and season",
                "Pat wings very dry. Toss with baking powder, salt and paprika for extra crisp skin.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Bake until crisp",
                "Bake at 220°C, turning once, until the skin is blistered and cooked through.",
            ),
            direction(
                2,
                "Toss in glaze",
                "Warm hot sauce, honey, butter and garlic. Toss wings in the glaze and serve immediately.",
            ),
        ],
    },
    9: {
        id: "9",
        title: "Berry yogurt breakfast bowl",
        description:
            "Creamy yogurt with seasonal berries, granola and a drizzle of honey. A fresh start that takes almost no time.",
        image: "/jpg/recipe-1.jpg",
        cookTime: "0",
        prepTime: "10",
        tag: "Breakfast",
        authorId: "4",
        date: "2024-02-11",
        information: {
            calories: "248.3",
            totalFat: "7.1",
            protein: "12.4",
            carbohydrate: "34.8",
            cholesterol: "8.0",
        },
        ingredients: {
            stepOne: ingredientGroup("Bowl", [
                "200g Greek yogurt",
                "1 handful mixed berries",
                "40g granola",
                "1 tsp honey",
            ]),
            stepTwo: ingredientGroup("Optional toppings", [
                "Chia seeds",
                "Toasted almonds",
                "Fresh mint",
            ]),
        },
        directions: [
            direction(
                0,
                "Spoon the yogurt",
                "Add yogurt to a bowl and swirl it so there is a well in the centre.",
            ),
            direction(
                1,
                "Add fruit and crunch",
                "Top with berries and granola. Finish with honey and any extra toppings.",
            ),
        ],
    },
    10: {
        id: "10",
        title: "Dark chocolate avocado mousse",
        description:
            "Silky chocolate mousse made with ripe avocado. Rich, naturally creamy and surprisingly simple.",
        image: "/jpg/hero-4.jpg",
        cookTime: "0",
        prepTime: "15",
        tag: "Chocolate",
        authorId: "3",
        date: "2024-05-03",
        information: {
            calories: "276.9",
            totalFat: "20.4",
            protein: "4.8",
            carbohydrate: "22.1",
            cholesterol: "0.0",
        },
        ingredients: {
            stepOne: ingredientGroup("Mousse", [
                "2 ripe avocados",
                "40g cocoa powder",
                "3 tbsp maple syrup",
                "1 tsp vanilla extract",
                "Pinch of sea salt",
            ]),
            stepTwo: ingredientGroup("To serve", [
                "Fresh raspberries",
                "Shaved dark chocolate",
            ]),
        },
        directions: [
            direction(
                0,
                "Blend until smooth",
                "Scoop avocado into a blender with cocoa, maple, vanilla and salt. Blend until completely silky.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Chill and garnish",
                "Spoon into glasses, chill for 20 minutes and top with berries and chocolate.",
            ),
        ],
    },
    11: {
        id: "11",
        title: "Lemon vanilla cheesecake cups",
        description:
            "Individual cheesecake cups with a buttery crumb and a lemon-vanilla filling. Easy dessert for guests.",
        image: "/jpg/hero-1.jpg",
        cookTime: "0",
        prepTime: "25",
        tag: "Dessert",
        authorId: "1",
        date: "2024-07-19",
        information: {
            calories: "334.7",
            totalFat: "21.6",
            protein: "5.9",
            carbohydrate: "29.5",
            cholesterol: "64.0",
        },
        ingredients: {
            stepOne: ingredientGroup("Base", [
                "120g digestive biscuits",
                "40g melted butter",
            ]),
            stepTwo: ingredientGroup("Filling", [
                "250g cream cheese",
                "80g icing sugar",
                "Zest of 1 lemon",
                "1 tsp vanilla extract",
            ]),
        },
        directions: [
            direction(
                0,
                "Make the crumb",
                "Crush biscuits and mix with melted butter. Press into serving glasses.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Whip the filling",
                "Beat cream cheese with sugar, lemon zest and vanilla until fluffy.",
            ),
            direction(
                2,
                "Layer and chill",
                "Spoon filling over the crumb and chill until set. Serve cold.",
            ),
        ],
    },
    12: {
        id: "12",
        title: "Garden vegetable breakfast scramble",
        description:
            "Soft scrambled eggs with seasonal vegetables and herbs. A colourful breakfast that still feels light.",
        image: "/jpg/hero-2.jpg",
        cookTime: "10",
        prepTime: "10",
        tag: "Breakfast",
        authorId: "3",
        date: "2025-01-08",
        information: {
            calories: "228.1",
            totalFat: "15.2",
            protein: "14.6",
            carbohydrate: "8.3",
            cholesterol: "332.0",
        },
        ingredients: {
            stepOne: ingredientGroup("Scramble", [
                "4 eggs",
                "1 tbsp butter",
                "1 small zucchini, diced",
                "A handful of spinach",
                "Cherry tomatoes, halved",
            ]),
            stepTwo: ingredientGroup("To finish", [
                "Fresh herbs",
                "Salt and black pepper",
            ]),
        },
        directions: [
            direction(
                0,
                "Cook the vegetables",
                "Melt butter and saute zucchini and tomatoes until just soft. Add spinach to wilt.",
                "/jpg/dir.jpg",
            ),
            direction(
                1,
                "Scramble the eggs",
                "Beat eggs, pour into the pan and stir gently over low heat until just set.",
            ),
            direction(
                2,
                "Season and serve",
                "Finish with herbs, salt and pepper. Serve immediately while still creamy.",
            ),
        ],
    },
};

export function getRecipeIngredientList(recipe) {
    if (!recipe?.ingredients) return [];

    return Object.values(recipe.ingredients).flatMap((group) =>
        (group.inner ?? []).map((item) => item.text),
    );
}

export function getRecipeById(recipeId) {
    const recipe = mockRecipe[recipeId];
    if (!recipe) return null;

    return {
        ...recipe,
        author: getUserById(recipe.authorId),
    };
}

export function getRecipesList() {
    return Object.keys(mockRecipe).map((id) => getRecipeById(id));
}

export function getRecipeCards(limit) {
    const cards = getRecipesList().map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        time: Number(recipe.cookTime) || Number(recipe.prepTime) || 0,
        category: recipe.tag,
        author: recipe.author,
    }));

    return typeof limit === "number" ? cards.slice(0, limit) : cards;
}

export function getOtherRecipes(currentId, limit = 3) {
    return getRecipesList()
        .filter((recipe) => recipe.id !== String(currentId))
        .slice(0, limit);
}

export function getRecipeCategories() {
    return [...new Set(getRecipesList().map((recipe) => recipe.tag))];
}

export default mockRecipe;
