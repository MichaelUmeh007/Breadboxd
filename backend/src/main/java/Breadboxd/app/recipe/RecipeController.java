package Breadboxd.app.recipe;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @GetMapping("/recipes")
    public ResponseEntity<PaginatedResponse<RecipeListDTO>> getAllRecipes(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ){
        Page<RecipeListDTO> allRecipes = recipeService.getAllRecipes(page, size);
        PaginatedResponse<RecipeListDTO> response = new PaginatedResponse<>(
                allRecipes.getContent(),
                allRecipes.getNumber(),
                allRecipes.getSize(),
                allRecipes.getTotalElements(),
                allRecipes.getTotalPages()
        );
        return ResponseEntity.ok(response);
    }


}
