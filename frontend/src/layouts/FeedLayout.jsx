import { Box, CircularProgress, Typography } from "@mui/material";
import { RecipeListCard } from "../components/recipe/RecipeListCard";
import { useEffect, useState, useCallback, useRef } from "react";
import Loading from "../components/misc/Loading";

const FeedLayout = ({ fetchRecipes, pageSize = 5, variant, endMessage }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const fetchedRef = useRef(false)

  const isFetching = useRef(false); 

  const loadRecipes = useCallback(async () => {
    if (loading || !hasMore || isFetching.current) return;

    setLoading(true);
    setError(null);
    isFetching.current = true;

    try {
      const data = await fetchRecipes(page, pageSize);

      setRecipes((prev) => {
        const newRecipes = [...prev, ...data.content];
        const uniqueRecipes = Array.from(new Map(newRecipes.map((r) => [r.id, r])).values());
        return uniqueRecipes;
      });

      setHasMore(page < data.totalPages - 1);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to load recipes", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }, [fetchRecipes, page, pageSize, hasMore, loading]);

  useEffect(() => {
    if (!fetchedRef.current) {
      loadRecipes();
      fetchedRef.current = true;
    }
  }, []);



  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
      }}
    >
      {recipes.map((recipe) => (
        <RecipeListCard key={recipe.id} recipe={recipe} variant={variant} />
      ))}


    {/* Loading spinner */}
    {loading && (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", py: 2 }}>
        <CircularProgress />
      </Box>
    )}

    {/* Error message */}
    {error && (
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection:"column", 
          justifyContent: "center", 
          alignItems: "center",
          alignContent: "center", 
          width: "100%", 
          py: 2 }}>
        <CircularProgress />
        <Typography textAlign="center" color="orange">{error}</Typography>
      </Box>
    )}

    {/* No more recipes message */}
    {!hasMore && !loading && recipes.length > 0 && (
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", py: 2 }}>
        <Typography color="text.secondary">{endMessage}</Typography>
      </Box>
    )}
    </Box>
  );
};

export default FeedLayout;



