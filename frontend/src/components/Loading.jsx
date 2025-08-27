import { useTheme, Box, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import LoadingIcon from "@/assets/LoadingIcon.svg?react"

const Loading = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center',
                minHeight:'100vh',
                minWidth:'100vw',
                background: theme.palette.breadbrown.secondary,
                backgroundSize:'cover',
                backgroundPosition:'center',
                gap:2
            }}

        >

            <SvgIcon component={LoadingIcon} viewBox="0 0 1024 1024"
                sx={{
                    width: { xs: "25%", sm: "20%", md: "12%", lg: "8%" },
                    height:"auto", 
                    display:'flex',
                    animation: "spin 2s linear infinite",
                    "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" }
                    }
                }}  
            />

            
            <Typography                     
            sx={{
                    fontSize:{xs:"1.5rem", md:"2rem"},
                    color:'white',
                    fontWeight:'bold'
                }}>
                Loading...
            </Typography>

        </Box>

    )
}

export default Loading;