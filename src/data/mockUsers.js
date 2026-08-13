export const mockUsers = {
    1: {
        id: "1",
        username: "Wade Warren",
        photo: "/png/author-josh.png",
    },
    2: {
        id: "2",
        username: "John Smith",
        photo: "/png/author-josh.png",
    },
    3: {
        id: "3",
        username: "Robert Fox",
        photo: "/png/author-josh.png",
    },
    4: {
        id: "4",
        username: "Dianne Russell",
        photo: "/png/author-josh.png",
    },
};

export function getUserById(userId) {
    return mockUsers[userId] ?? null;
}
