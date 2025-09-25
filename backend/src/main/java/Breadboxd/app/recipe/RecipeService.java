package Breadboxd.app.recipe;

import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    public Page<RecipeListDTO> getAllRecipes(int page, int size){
        Pageable pageable = PageRequest.of(page, size, Sort.by("updatedAt").descending());
        return recipeRepository.findAllWithPagination(pageable);

    }
}
