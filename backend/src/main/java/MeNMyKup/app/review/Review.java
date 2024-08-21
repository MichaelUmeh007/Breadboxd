package MeNMyKup.app.review;

import MeNMyKup.app.recipe.Recipe;
import MeNMyKup.app.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Check;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="reviews")
@Check(constraints = "rating >= 0 AND rating <= 5")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(
            name="rating",
            nullable = false
    )
    private Float rating;

    @Column(
            name = "comment",
            columnDefinition = "TEXT",
            length = 180
    )
    private String comment;

    @Column(
            name = "date",
            columnDefinition = "DATE",
            nullable = false
    )
    private LocalDate date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User reviewer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

}
