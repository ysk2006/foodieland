export const mockUsers = {
  1: {
    id: "1",
    username: "Wade Warren",
    photo: "",
  },
};

export function getUserById(userId) {
  return mockUsers[userId] ?? null;
}
