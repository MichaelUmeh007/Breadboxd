export const normalizeRecipe = (rawRecipe) => ({
    id: rawRecipe.id,
    title: rawRecipe.title ?? "Untitled Recipe",
    description: rawRecipe.description ?? "No description Available",
    updatedAt: rawRecipe.updatedAt ?? "Unavailable",
    authorName: rawRecipe.authorName ?? "Anonymous",
    userImageUrl:
        rawRecipe.userImageUrl && rawRecipe.userImageUrl !== "Unavailable"
        ? rawRecipe.userImageUrl
        : null,
    imageUrl:
        rawRecipe.imageUrl && rawRecipe.imageUrl !== "Unavailable"
        ? rawRecipe.imageUrl
        : null,
    averageRating: rawRecipe.averageRating ?? 0,
    ratingCount: rawRecipe.ratingCount ?? -1


})