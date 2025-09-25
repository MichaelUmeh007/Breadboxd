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

            const response = await axiosInstance.get("/api/recipes",
                {params : {page: 0, size: 5}}
            )
            const normalizedRecipes = response.data.content.map(normalizeRecipe)
            setRecipes(normalizedRecipes)
            
        };
        getAllRecipes();
    }, [])

    if (!recipes) return (<Loading/>)

    async function fetchRecipes (page, size) {
         const response = await axiosInstance.get("/api/recipes",
                {params : {page: page, size: size}}
        )
        console.log("fetch page", page)
        return response.data
    }
       

    return (
    <Box>
        <FeedLayout fetchRecipes={fetchRecipes} endMessage={"More recipes on the way!"}/>
    </Box> 
        
    )
}


// import { useState } from "react";
// import { Tabs, Tab, Box } from "@mui/material";
// import { MobileFeedLayout } from "./MobileFeedLayout";

// export const MobileDashboard = () => {
//   const [tab, setTab] = useState("explore");

//   return (
//     <Box>
//       <Tabs value={tab} onChange={(e, val) => setTab(val)}>
//         <Tab value="explore" label="Explore" />
//         <Tab value="following" label="Following" />
//         <Tab value="my" label="My Recipes" />
//       </Tabs>

//       <MobileFeedLayout currentFeed={tab} />
//     </Box>
//   );
// };