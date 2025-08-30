package Breadboxd.app.recipe;

import Breadboxd.app.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Check;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name="recipe_reviews",
        uniqueConstraints =  @UniqueConstraint(columnNames = { "user_id", "recipe_id"})

)
@Check(constraints = "rating >= 0 AND rating <= 5")
public class RecipeReview {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(
            name="rating",
            nullable = false
    )
    private Float rating;

    @Column(
            name = "title",
            length = 100,
            nullable = false
    )
    private String title;
    @Column(
            name = "comment",
            length = 225
    )
    private String comment;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private User reviewer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Recipe recipe;

}
