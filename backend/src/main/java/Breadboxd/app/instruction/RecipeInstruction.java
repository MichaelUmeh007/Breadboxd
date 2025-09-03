package Breadboxd.app.instruction;

import Breadboxd.app.recipe.Recipe;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Check;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="recipe_instructions")
@Check(constraints = "step_number > 0")
public class RecipeInstruction {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(
            name = "step_number",
            nullable = false
    )
    private Integer stepNumber;

    @Column(
            name = "description",
            length = 250,
            nullable = false
    )
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Recipe recipe;
}