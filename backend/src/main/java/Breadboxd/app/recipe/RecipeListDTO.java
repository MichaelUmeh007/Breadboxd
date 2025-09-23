package Breadboxd.app.recipe;


import java.time.LocalDateTime;

public record RecipeListDTO (
    Integer id,
    String title,
    String description,
    Cuisine cuisine,
    LocalDateTime createdAt,
    LocalDateTime updatedAt,
    String authorName,
    String userImageUrl,
    String imageUrl,
    Double averageRating,
    Long ratingCount
) {}
