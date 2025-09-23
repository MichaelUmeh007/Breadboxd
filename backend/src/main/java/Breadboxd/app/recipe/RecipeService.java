package Breadboxd.app.recipe;

import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import org.slf4j.Logger;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final Logger logger = LoggerFactory.getLogger(RecipeService.class);
    public List<RecipeListDTO> getAllRecipes(){

        return recipeRepository.findAllWithAverageRatingAndCountRatingandUserImage();

    }
}
