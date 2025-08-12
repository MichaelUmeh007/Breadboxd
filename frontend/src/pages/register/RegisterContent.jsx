import { Stack, Typography, Box } from "@mui/material"
import LogoTitle from "../../components/LogoTitle"
export const RegisterContent = () => {
    return (
    <Stack
        sx={{ 
            flexDirection: 'column',
            gap: 4,
            maxWidth: 450 ,
            alignItems: 'flex-start',
            display: { xs: 'none', md: 'flex' } 
        }}
    >
        <Box sx={{ display: 'flex' }}>
            <Typography
                variant="h1"
                sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "wheat",
                lineHeight: 1.1
                }}
            >
                Stop gatekeeping. Start sharing!
            </Typography>
        </Box>
        <LogoTitle size={80} fontSize="3rem" alignItems="flex-start" justifyContent="flex-start"/>

    </Stack>


        )
}