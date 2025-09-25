import { useTheme, Box, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import LoadingIcon from "@/assets/LoadingIcon.svg?react"

const Loading = ({message}) => {
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

            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems: 'center',
                }}
            >
            <Typography                     
                sx={{
                        fontSize:{xs:"1.5rem", md:"2rem"},
                        color:'white',
                        fontWeight:'bold'
                }}>
                Loading...
            </Typography>

            { message &&
                <Typography                     
                    sx={{
                        fontSize:{xs:"1rem", md:"1.5rem"},
                        color: "orange",
                        textAlign: "center"
                    }}>
                    {message}
                </Typography>
            }
            </Box>


        </Box>

    )
}

export default Loading;