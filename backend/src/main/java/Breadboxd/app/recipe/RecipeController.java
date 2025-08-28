package Breadboxd.app.recipe;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RecipeController {

    @GetMapping("/recipes")
    public ResponseEntity<Void> getAllRecipes(){
        return ResponseEntity.ok().build();
    }

}
