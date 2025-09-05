package Breadboxd.app.recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("""
    SELECT new Breadboxd.app.recipe.RecipeListDTO(
        r.id,
        r.title,
        r.description,
        r.cuisine,
        r.createdAt,
        r.updatedAt,
        r.author.username,
        COALESCE(ri.url, 'Unavailable'),
        COALESCE(AVG(rv.rating), 0.0),
        COALESCE(COUNT(rv), 0)
    )
    FROM Recipe r
    LEFT JOIN r.recipeReviews rv
    LEFT JOIN r.recipeImage ri
    GROUP BY r.id, r.title, r.description, r.cuisine, r.createdAt, r.updatedAt, r.author.username, ri.url
""")
    List<RecipeListDTO> findAllWithAverageRatingAndCountRating();
}
