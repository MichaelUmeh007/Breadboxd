package MeNMyKup.app.instruction;

import MeNMyKup.app.recipe.Recipe;
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
@Table(name="instructions")
@Check(constraints = "step_number > -1")
public class Instruction {

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
            columnDefinition = "TEXT",
            length = 250,
            nullable = false
    )
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
}
