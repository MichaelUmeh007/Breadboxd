package Breadboxd.app.config;

import Breadboxd.app.instruction.*;
import Breadboxd.app.recipe.*;
import Breadboxd.app.ingredient.*;
import Breadboxd.app.equipment.*;
import Breadboxd.app.review.*;
import Breadboxd.app.user.Role;
import Breadboxd.app.user.User;
import Breadboxd.app.user.UserImage;
import Breadboxd.app.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    @Profile("dev") // 👈 only runs when 'dev' profile is active
    CommandLineRunner seedDatabase(
            RecipeRepository recipeRepository,
            RecipeIngredientRepository recipeIngredientRepository,
            RecipeEquipmentRepository recipeEquipmentRepository,
            EquipmentRepository equipmentRepository,
            RecipeInstructionRepository instructionRepository,
            RecipeReviewRepository reviewRepository,
            UserRepository userRepository,
            IngredientRepository ingredientRepository,
            PasswordEncoder passwordEncoder
    ) {
        return args -> {
            if (recipeRepository.count() > 0) {
                System.out.println("ℹ️ Database already seeded, skipping...");
                return;
            }

            List<String> users = new ArrayList<>(Arrays.asList(
                    "mike", "suzy", "cathy", "james", "john", "william",
                    "bill", "hillary", "obama", "jacob", "hartelstein"));
            for (String s : users) {



                // Create test user Image
                UserImage userImage = UserImage.builder()
                        .url("Placeholder")
                        .build();

                // Create a user
                String emailEnd = "@example.com";
                User user = User.builder()
                        .username(s)
                        .firstname("Mike")
                        .lastname("Jeffries")
                        .role(Role.USER)
                        .userImage(null)
                        .email(s + emailEnd)
                        .password(passwordEncoder.encode("aA1!aaaa"))
                        .build();

//                userImage.setUser(user);

                userRepository.save(user);

                // Create test recipe image
                RecipeImage recipeImage = RecipeImage.builder()
                        .url("src/assets/sampleRecipeImage.jpg")
                        .build();

                // Create a recipe
                Recipe recipe = Recipe.builder()
                        .title("Spaghetti Bolognese")
                        .description("Classic Italian pasta with rich meat sauce")
                        .cuisine(Cuisine.ITALIAN)
                        .recipeImage(recipeImage)
                        .author(user)
                        .servings(4)
                        .build();

                recipeImage.setRecipe(recipe);

                recipeRepository.save(recipe);




                // Add ingredients

                Ingredient pastaIngredient = Ingredient.builder()
                        .name(s + "Spaghetti")
                        .build();

                Ingredient beefIngredient = Ingredient.builder()
                        .name(s + "beef")
                        .build();

                ingredientRepository.saveAll(List.of(pastaIngredient, beefIngredient));

                RecipeIngredient pasta = RecipeIngredient.builder()
                        .ingredient(pastaIngredient)
                        .unit(Unit.G)
                        .quantity(200f)
                        .recipe(recipe)
                        .build();

                RecipeIngredient beef = RecipeIngredient.builder()
                        .ingredient(beefIngredient)
                        .unit(Unit.G)
                        .quantity(300f)
                        .recipe(recipe)
                        .build();

                recipeIngredientRepository.saveAll(List.of(pasta, beef));

                // Add equipment

                Equipment panEquipment = Equipment.builder()
                        .name(s + "Large Pan")
                        .build();

                equipmentRepository.save(panEquipment);
                RecipeEquipment pan = RecipeEquipment.builder()
                        .equipment(panEquipment)
                        .quantity(1)
                        .recipe(recipe)
                        .build();

                recipeEquipmentRepository.save(pan);

                // Add instructions
                RecipeInstruction step1 = RecipeInstruction.builder()
                        .stepNumber(1)
                        .description("Boil spaghetti until al dente.")
                        .recipe(recipe)
                        .build();

                RecipeInstruction step2 = RecipeInstruction.builder()
                        .stepNumber(2)
                        .description("Cook ground beef in pan until browned.")
                        .recipe(recipe)
                        .build();

                instructionRepository.saveAll(List.of(step1, step2));

                // Add review
                RecipeReview review = RecipeReview.builder()
                        .rating(4.5f)
                        .title("Delicious!")
                        .comment("Simple and tasty. Family loved it.")
                        .reviewer(user)
                        .recipe(recipe)
                        .build();

                reviewRepository.save(review);
            }

            System.out.println("✅ Database seeded with sample recipe (dev mode)!");
        };
    }
}
