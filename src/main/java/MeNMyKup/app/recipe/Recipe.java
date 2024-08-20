package MeNMyKup.app.recipe;

import MeNMyKup.app.profile.Cuisine;
import MeNMyKup.app.review.Review;
import MeNMyKup.app.user.User;
import com.fasterxml.jackson.databind.annotation.EnumNaming;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(
            name = "title",
            columnDefinition = "TEXT",
            length = 200,
            nullable = false

    )
    private String title;

    @Enumerated
    @Column(
            name = "cuisine",
            nullable = false
    )
    private Cuisine cuisine;

    @Column(
            name = "date",
            columnDefinition = "DATE",
            nullable = false
    )
    private LocalDate date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User author;

    @OneToOne(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private RecipeImage recipeImage;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("stepNumber ASC")
    private Set<Instruction> instructions;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<RecipeIngredient> recipeIngredients;

    @OneToMany(mappedBy = "recipe", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @OrderBy("date ASC")
    private Set<Review> recipeReviews;

    @Column(
            name = "servings",
            columnDefinition = "smallint",
            nullable = false
    )
    private Integer servings;

}
