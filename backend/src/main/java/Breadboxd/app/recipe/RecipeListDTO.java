package Breadboxd.app.recipe;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecipeListDTO {

    private Integer id;

    private String title;

    private String description;

    private Cuisine cuisine;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String authorName;

    private String imageUrl;
}
