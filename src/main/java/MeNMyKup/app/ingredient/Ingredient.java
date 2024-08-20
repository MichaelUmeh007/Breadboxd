package MeNMyKup.app.ingredient;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(
            name="name",
            columnDefinition = "TEXT",
            length = 100,
            nullable = false
    )
    private String name;

    @OneToOne(mappedBy = "ingredient", cascade = CascadeType.ALL, orphanRemoval = true)
    private RecipeIngredient recipeIngredient;

}
