import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import axiosInstance from "../../api/axiosInstance"
import { useAuth } from "../../context/authContext"
import { RecipeListCard } from "../../components/recipe/RecipeListCard"
import Loading from "../../components/misc/Loading"
import { normalizeRecipe } from "../../utils/recipe/recipeAdapter"
import MobileFeedLayout from "../../layouts/MobileFeedLayout"
import FeedLayout from "../../layouts/FeedLayout"

export const MobileDashboard = () => {
    
    const { user } = useAuth();
    const [recipes, setRecipes] = useState(null)
    
    useEffect(() => {
        async function getAllRecipes() {

            const response = await axiosInstance.get("/api/recipes")
            const normalizedRecipes = response.data.map(normalizeRecipe)
            setRecipes(normalizedRecipes)
            
        };
        getAllRecipes();
    }, [])

    if (!recipes) return (<Loading/>)

    return (
            <FeedLayout recipes={recipes}/>
    )
}