package Breadboxd.app.recipe;

import jakarta.persistence.*;
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

    @Column(
            name="name",
            columnDefinition = "TEXT",
            length = 100,
            nullable = false
    )
    private String name;

    @Enumerated(EnumType.STRING)
    private Unit unit;

    private Float quantity;
}
