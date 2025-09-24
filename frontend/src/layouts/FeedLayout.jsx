import { Box, CircularProgress, Typography } from "@mui/material";
import { RecipeListCard } from "../components/recipe/RecipeListCard";
import Loading from "../components/misc/Loading";

const FeedLayout = ({ recipes, loading, variant }) => {
  if (loading) {
    return (
      <Loading/>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <Loading/>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={0}>
      {recipes.map((recipe) => (
        <RecipeListCard key={recipe.id} recipe={recipe} variant={variant} />
      ))}
    </Box>
  );
};

export default FeedLayout;
