import { Stack, Typography, Box } from "@mui/material"
import LogoTitle from "../../components/LogoTitle"
export const LoginContent = () => {
    return (
    <Stack
        sx={{ 
            flexDirection: 'column',
            alignSelf: 'center',
            gap: 4,
            maxWidth: 450 ,
            display: { xs: 'None', md: 'flex' } 
        }}
    >
        <Box sx={{ display: 'flex' }}>
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
        <LogoTitle size={80} fontSize="4rem"/>

    </Stack>


        )
}