package MeNMyKup.app.recipe;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Check;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "recipe_ingredients")
@Check(constraints = "quantity > 0")
public class RecipeIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @ManyToOne
    private Recipe recipe;

    @OneToOne
    private Ingredient ingredient;

    @Enumerated
    private Unit unit;

    private Float quantity;
}

