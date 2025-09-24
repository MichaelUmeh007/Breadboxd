
import { IconButton, Box, Rating, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Avatar } from "@mui/material";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import DefaultUserImage from "@/assets/DefaultUserImage.jpg"
import DefaultRecipeImage from "@/assets/DefaultRecipeImage.jpg"
import StyledRating from "../misc/StyledRating";
import { useTheme } from "@mui/material";

export const RecipeListCard = ({recipe, variant}) => {
    const theme = useTheme();
    const { id, title, description, updatedAt, 
        authorName, userImageUrl, imageUrl, averageRating, ratingCount } = recipe
  
    const updatedAtDate = updatedAt.slice(0, updatedAt.indexOf("T", 0));

  return (
    <Card sx={{ width: "100%", background: "white" }}>

      {/* Card header: User avatar, name, recipe title*/}
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
          <Typography 
            variant="subtitle2"
            fontWeight="bold"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >  
            {title.length> 80? title.slice(0, 100) + "..." : title}
            
          </Typography>
        }
      />

      {/* Card Media: Recipe image*/}
      <CardMedia
        component="img"
        image={imageUrl || DefaultRecipeImage}
        alt={recipe.title}
        onError={(e) => {
          e.currentTarget.src = DefaultRecipeImage
        }}
        sx={{
          aspectRatio: "1 / 1",
          objectFit: "cover",
          width: "100%"
        }}
      />

      {/* Card content rating row*/}
      <CardContent sx={{ px: 1, py: 0 }}>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            { ratingCount > 0 &&
              <Typography variant="body2" fontWeight="bold">{averageRating.toFixed(1)}</Typography>
              }
            <StyledRating
              value={averageRating}
              precision={0.1} 
              readOnly
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              ({ratingCount})
            </Typography>
          </Box>
          <IconButton aria-label="save recipe">
            <BookmarkBorderOutlined />
          </IconButton>
        </Box>

        {/* Card content description*/}
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {description}
        </Typography>

        {/* Card content date*/}
        <Typography
          color="text.secondary"
          variant="caption"
        >
          {updatedAtDate}
        </Typography>
      </CardContent>


    </Card>
  );

}

