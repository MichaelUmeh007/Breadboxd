
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Avatar, Rating } from "@mui/material";
import DefaultUserImage from "@/assets/DefaultUserImage.jpg"
import { useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const RecipeListCard = ({recipe}) => {
    const theme = useTheme();

    const { id, title, description, cuisine, createdAt, updatedAt, 
        authorName, userImageUrl, imageUrl, averageRating, ratingCount } = recipe
  return (
    <Card variant="outlined" sx={{ width: "100%", background: "white" }}>

      <CardHeader
        avatar={
            <Avatar
                src={userImageUrl || DefaultUserImage}
                alt={authorName}
            > 
            {recipe.authorName[0]}
            </Avatar>
        }
        title={
          <Typography variant="subtitle1" >
            {authorName}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2" fontWeight="bold">
            {title}
          </Typography>
        }
      />
    </Card>
  );

}

