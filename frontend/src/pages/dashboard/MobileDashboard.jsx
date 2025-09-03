import { Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import axiosInstance from "../../api/axiosInstance"
import { useAuth } from "../../context/authContext"


export const MobileDashboard = () => {
    const { user } = useAuth();
    useEffect(() => {
        async function getAllRecipes() {
            const recipes = await axiosInstance.get("/api/recipes")
            console.log(recipes.data)
        };
        getAllRecipes();
    }, [])
    return (
        <Stack>
            <Typography>
                Mobile Version
            </Typography>
            <Typography>
                Current User: {user.username}
            </Typography>
        </Stack>
    )
}