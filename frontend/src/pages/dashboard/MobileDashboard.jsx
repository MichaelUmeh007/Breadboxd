import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import axiosInstance from "../../api/axiosInstance"
import { useAuth } from "../../context/authContext"
import { RecipeListCard } from "../../components/recipe/RecipeListCard"
import Loading from "../../components/misc/Loading"
import { normalizeRecipe } from "../../utils/recipe/recipeAdapter"

export const MobileDashboard = () => {
    
    const { user } = useAuth();
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
        async function getAllRecipes() {
            const response = await axiosInstance.get("/api/recipes")
            const normalizedRecipes = response.data.map(normalizeRecipe)
            setRecipe(normalizedRecipes[0])
            console.log(normalizedRecipes)
        };
        getAllRecipes();
    }, [])

    if (!recipe) return (<Loading/>)

    return (
        <Box>
            <RecipeListCard recipe={recipe}/>
        </Box>
    )
}