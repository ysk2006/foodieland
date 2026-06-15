import { getUserById } from "./mockUsers";

export const mockBlogs = {
  1: {
    id: "1",
    image: "",
    title: "Crochet Projects for Noodle Lovers",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
    authorId: "1",
    date: "21.06.2025",
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
