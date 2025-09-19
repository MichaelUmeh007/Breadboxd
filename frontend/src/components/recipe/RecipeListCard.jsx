import { Box, Typography } from "@mui/material"
export const RecipeListCard = ({recipe}) => {
    console.log(recipe)
    const { id, title, description, cuisine, createdAt, updatedAt, 
        authorName, imageUrl, averageRating, ratingCount } = recipe
    console.log(title)
    return (
        <Box>
            <Typography variant="h2">
                {title}
            </Typography>
        </Box>
    )
}

