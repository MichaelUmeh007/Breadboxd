package Breadboxd.app.recipe;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @GetMapping("/recipes")
    public ResponseEntity<List<RecipeListDTO>> getAllRecipes(){
        List<RecipeListDTO> allRecipes = recipeService.getAllRecipes();
        return ResponseEntity.ok(allRecipes);
    }

}
