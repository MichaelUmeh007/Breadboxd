package Breadboxd.app.recipe;

import Breadboxd.app.equipment.RecipeEquipment;
import Breadboxd.app.ingredient.RecipeIngredient;
import Breadboxd.app.instruction.RecipeInstruction;
import Breadboxd.app.review.RecipeReview;
import Breadboxd.app.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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

    @NotBlank
    @Column(
            length = 80,
            nullable = false
    )
    private String title;

    @Column(
            nullable = false,
            length = 250
    )
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(
            name = "cuisine"
    )
    private Cuisine cuisine;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private User author;

    @OneToOne(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private RecipeImage recipeImage;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("stepNumber ASC")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<RecipeInstruction> recipeInstructions = new ArrayList<>();

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<RecipeIngredient> recipeIngredients = new HashSet<>();

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<RecipeEquipment> recipeEquipment = new HashSet<>();

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("createdAt DESC")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<RecipeReview> recipeReviews = new ArrayList<>();

    @OneToMany(mappedBy = "recipe", orphanRemoval = true, cascade = CascadeType.ALL)
    @OrderBy("savedAt DESC")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<SavedRecipe> savedRecipes;

    @Column(
            name = "servings",
            columnDefinition = "smallint",
            nullable = false
    )
    private Integer servings;

    // --- Helper methods to maintain bidirectional relationships ---

    public void setRecipeImage(RecipeImage image) {
        this.recipeImage = image;
        if (image != null){
            image.setRecipe(this);
        }
    }

    public void addInstruction(RecipeInstruction instruction) {
        recipeInstructions.add(instruction);
        instruction.setRecipe(this);
    }

    public void removeInstruction(RecipeInstruction instruction) {
        recipeInstructions.remove(instruction);
        instruction.setRecipe(null);
    }

    public void addIngredient(RecipeIngredient ingredient) {
        recipeIngredients.add(ingredient);
        ingredient.setRecipe(this);
    }

    public void removeIngredient(RecipeIngredient ingredient) {
        recipeIngredients.remove(ingredient);
        ingredient.setRecipe(null);
    }

    public void addEquipment(RecipeEquipment equipment) {
        recipeEquipment.add(equipment);
        equipment.setRecipe(this);
    }

    public void removeEquipment(RecipeEquipment equipment) {
        recipeEquipment.remove(equipment);
        equipment.setRecipe(null);
    }

    public void addReview(RecipeReview review) {
        recipeReviews.add(review);
        review.setRecipe(this);
    }

    public void removeReview(RecipeReview review) {
        recipeReviews.remove(review);
        review.setRecipe(null);
    }

}
