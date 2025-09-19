package Breadboxd.app.recipe;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SavedRecipeRepository extends JpaRepository<SavedRecipe, Integer> {
    List<SavedRecipe> findByUserIdOrderBySavedAtDesc(Integer userId);

}
