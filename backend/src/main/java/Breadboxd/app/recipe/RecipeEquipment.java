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
@Table(name = "equipment")
@Check(constraints = "quantity > 0")
public class RecipeEquipment {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name = "name",
            columnDefinition = "TEXT",
            nullable = false,
            length = 100)
    private String name;

    @Column(
            name = "quantity",
            columnDefinition = "SMALLINT",
            nullable = false
    )
    private Integer quantity;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Recipe recipe;
}

