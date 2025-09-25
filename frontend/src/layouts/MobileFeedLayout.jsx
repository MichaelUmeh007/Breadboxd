import Stack from '@mui/material/Stack';

// place holder
const MobileFeedLayout = ({ children }) => {
    return (
        <Stack>
        </Stack>
    );
};

export default MobileFeedLayout;

// import { FeedLayout } from "./FeedLayout";

// // API functions
// const fetchExploreRecipes = async (page, size) => {
//   const res = await fetch(`/api/recipes?page=${page}&size=${size}`);
//   return res.json();
// };

// const fetchFollowingRecipes = async (page, size) => {
//   const res = await fetch(`/api/recipes/following?page=${page}&size=${size}`);
//   return res.json();
// };

// const fetchMyRecipes = async (page, size) => {
//   const res = await fetch(`/api/users/me/recipes?page=${page}&size=${size}`);
//   return res.json();
// };

// export const MobileFeedLayout = ({ currentFeed }) => {
//   let fetchFn;

//   if (currentFeed === "explore") fetchFn = fetchExploreRecipes;
//   if (currentFeed === "following") fetchFn = fetchFollowingRecipes;
//   if (currentFeed === "my") fetchFn = fetchMyRecipes;

//   return <FeedLayout fetchRecipes={fetchFn} pageSize={5} />;
// };
