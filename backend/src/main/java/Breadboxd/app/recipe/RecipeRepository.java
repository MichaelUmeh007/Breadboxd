package Breadboxd.app.recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Objects;

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
        COALESCE(ui.url, 'Unavailable'),
        COALESCE(ri.url, 'Unavailable'),
        COALESCE(AVG(rv.rating), 0.0),
        COALESCE(COUNT(DISTINCT rv), 0)
    )
    FROM Recipe r
    LEFT JOIN r.recipeReviews rv
    LEFT JOIN r.recipeImage ri
    LEFT JOIN r.author.userImage ui
    GROUP BY
        r.id,
        r.title,
        r.description,
        r.cuisine,
        r.createdAt,
        r.updatedAt,
        r.author.username,
        ui.url,
        ri.url
""")
    List<RecipeListDTO> findAllWithAverageRatingAndCountRatingandUserImage();
}


