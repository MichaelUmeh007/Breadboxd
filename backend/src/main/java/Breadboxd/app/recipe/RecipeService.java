package Breadboxd.app.recipe;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public List<RecipeListDTO> getAllRecipes(){
        return recipeRepository.findAll()
                .stream()
                .map(recipe -> new RecipeListDTO(
                        recipe.getId(),
                        recipe.getTitle(),
                        recipe.getDescription(),
                        recipe.getCuisine(),
                        recipe.getCreatedAt(),
                        recipe.getUpdatedAt(),
                        recipe.getAuthor() != null ? recipe.getAuthor().getUsername() : "Unknown",
                        recipe.getRecipeImage() != null ? recipe.getRecipeImage().getImageUrl() : "Unavailable"
                ))
                .collect(Collectors.toList());
    }
}
