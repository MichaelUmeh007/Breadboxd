import { Stack, Typography, Box } from "@mui/material"
export const LoginContent = () => {
    return (
    <Stack
        sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
        <Box sx={{ display: { xs: 'None', md: 'flex' } }}>
            <Typography
                variant="h1"
                sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "wheat"
                }}
            >
                What's Looking, Good Cooking?
            </Typography>
        </Box>

    </Stack>


        )
}