import { getUserById } from "./mockUsers";

export const mockBlogs = {
    1: {
        id: "1",
        image: "/jpg/hero-1.jpg",
        title: "Crochet Projects for Noodle Lovers",
        description:
            "How a simple bowl of noodles inspired weekend crafts, slow cooking and a calmer kitchen ritual.",
        authorId: "1",
        date: "2025-06-21",
        category: "Lifestyle",
        content: [
            {
                type: "p",
                text: "There is a special kind of comfort in a steaming bowl of noodles. It is the dish we reach for after a long day, and it is also the one that gathers people around the table without much fuss.",
            },
            {
                type: "h2",
                text: "Cook slower, enjoy more",
            },
            {
                type: "p",
                text: "The best noodle nights are rarely complicated. Toast the aromatics, give the broth time, and finish with something fresh — herbs, lime, a handful of greens. The same patience that makes a good soup also makes a good weekend.",
            },
            {
                type: "p",
                text: "If you are looking for a small ritual, start with one homemade stock a week. Freeze what you do not use. Future you will be grateful when dinner is ten minutes away.",
            },
        ],
    },
    2: {
        id: "2",
        image: "/jpg/hero-2.jpg",
        title: "10 Ways to Prepare a Fast Breakfast",
        description:
            "Simple morning plates you can make in under fifteen minutes without sacrificing flavour.",
        authorId: "2",
        date: "2025-05-12",
        category: "Breakfast",
        content: [
            {
                type: "p",
                text: "Mornings do not need to be a compromise between speed and something you actually want to eat. A little prep and a short list of staples go a long way.",
            },
            {
                type: "h2",
                text: "Keep a breakfast drawer",
            },
            {
                type: "p",
                text: "Oats, yogurt, eggs, fruit and a good loaf of bread cover most of the bases. From there you can scramble, toast, assemble a bowl or blend a smoothie in minutes.",
            },
            {
                type: "p",
                text: "The trick is deciding the night before. If the pan is out and the fruit is washed, breakfast almost makes itself.",
            },
        ],
    },
    3: {
        id: "3",
        image: "/jpg/hero-3.jpg",
        title: "How to cook a tender roast chicken",
        description:
            "A reliable method for golden skin, juicy meat and a pan sauce worth sopping up with bread.",
        authorId: "3",
        date: "2025-04-03",
        category: "Meat",
        content: [
            {
                type: "p",
                text: "A roast chicken is one of those dishes that looks impressive and is mostly about heat, salt and time. Dry the skin well, season generously and do not rush the rest.",
            },
            {
                type: "h2",
                text: "High heat, then rest",
            },
            {
                type: "p",
                text: "Start hot to crisp the skin, then let the bird rest so the juices stay in the meat. That pause is the difference between a good roast and a dry one.",
            },
            {
                type: "p",
                text: "Use the tray juices with a splash of stock or wine. It is the easiest sauce you will make all week.",
            },
        ],
    },
    4: {
        id: "4",
        image: "/jpg/hero-4.jpg",
        title: "Salad bowls that actually fill you up",
        description:
            "Build a lunch bowl with crunch, protein and a dressing you will want to make again.",
        authorId: "4",
        date: "2025-03-18",
        category: "Healthy",
        content: [
            {
                type: "p",
                text: "A salad is only boring when it is just leaves. Add something warm, something crunchy and a proper dressing and it becomes a meal.",
            },
            {
                type: "h2",
                text: "Think in textures",
            },
            {
                type: "p",
                text: "Grain, greens, roasted vegetables, a salty element and a creamy one. That formula works whether you are packing lunch or feeding friends.",
            },
        ],
    },
    5: {
        id: "5",
        image: "/jpg/recipe-1.jpg",
        title: "The pantry pasta formula",
        description:
            "A flexible template for dinner when the fridge looks empty but the cupboard is not.",
        authorId: "1",
        date: "2025-02-09",
        category: "Lunch",
        content: [
            {
                type: "p",
                text: "Pasta night does not require a shopping list. Garlic, olive oil, chilli and whatever cheese you have will already get you close.",
            },
            {
                type: "h2",
                text: "Save the pasta water",
            },
            {
                type: "p",
                text: "That starchy water is what turns oil and tomatoes into a sauce that clings. A ladle is usually enough.",
            },
        ],
    },
    6: {
        id: "6",
        image: "/jpg/hero-1.jpg",
        title: "Chocolate desserts without the stress",
        description:
            "Mousse, pots and no-bake cups for nights when you want something sweet with almost no baking.",
        authorId: "3",
        date: "2025-01-22",
        category: "Dessert",
        content: [
            {
                type: "p",
                text: "Not every dessert needs an oven. A ripe avocado, good cocoa and a little maple syrup become a mousse that feels far more luxurious than the effort involved.",
            },
            {
                type: "p",
                text: "Chill it properly. Texture is everything, and twenty minutes in the fridge does most of the work.",
            },
        ],
    },
    7: {
        id: "7",
        image: "/jpg/hero-2.jpg",
        title: "Meal prep that still tastes like dinner",
        description:
            "How to cook once and eat well for days without repeating the same dry leftovers.",
        authorId: "2",
        date: "2024-12-14",
        category: "Lifestyle",
        content: [
            {
                type: "p",
                text: "Meal prep fails when everything is fully finished on Sunday. Cook the building blocks — grains, a protein, a sauce — and assemble fresh each night.",
            },
            {
                type: "h2",
                text: "Sauces save the week",
            },
            {
                type: "p",
                text: "A jar of vinaigrette, a spicy yogurt or a herb oil will make leftover chicken feel new again.",
            },
        ],
    },
    8: {
        id: "8",
        image: "/jpg/hero-3.jpg",
        title: "Hosting without spending the whole day in the kitchen",
        description:
            "A relaxed menu, a make-ahead dessert and the one thing you should never skip: a good drink on arrival.",
        authorId: "4",
        date: "2024-11-02",
        category: "Lifestyle",
        content: [
            {
                type: "p",
                text: "The secret to hosting is choosing dishes that wait well. A roast, a big salad and something cold for dessert will always beat three pans that need to land at the same minute.",
            },
            {
                type: "p",
                text: "Set the table early. Put out olives. Then you can actually talk to the people you invited.",
            },
        ],
    },
};

export function getBlogPostById(postId) {
    const post = mockBlogs[postId];
    if (!post) return null;

    return {
        ...post,
        author: getUserById(post.authorId),
    };
}

export function getBlogPosts() {
    return Object.keys(mockBlogs).map((id) => getBlogPostById(id));
}

export function getBlogCategories() {
    return [...new Set(getBlogPosts().map((post) => post.category))];
}

export function getRelatedBlogPosts(currentId, limit = 3) {
    return getBlogPosts()
        .filter((post) => post.id !== String(currentId))
        .slice(0, limit);
}
