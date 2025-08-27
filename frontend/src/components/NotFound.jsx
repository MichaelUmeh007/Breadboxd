import { Container, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import StyledLink from "./StyledLink";

const NotFound = () => {
    const theme = useTheme();
    return (
        <Container 
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                minHeight:'100vh',
                minWidth:'100vw',
                background: theme.palette.breadbrown.secondary,
                backgroundSize:'cover',
                backgroundPosition:'center'
            }}

        >
            <Box 
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems:'center',
                }}    
            >
                <Typography 
                    sx={{
                        fontSize:{xs:"4rem", md:"7rem"},
                        fontWeight: 'bold',
                        color:'white'
                    }}
                >
                    404
                </Typography>

                <Typography                     
                sx={{
                        fontSize:{xs:"1.5rem", md:"2rem"},
                        color:'grey',
                        fontWeight:'bold'
                    }}>
                    This page has gone stale! 
                </Typography>

                <Typography                     
                sx={{
                        fontSize:{xs:"1rem", md:"1.5rem"},
                        color:'grey',
                        fontWeight:'bold'
                    }}>
                   Head back home for some fresher options. 
                </Typography>

                <StyledLink to="/dashboard"
                    sx={{
                        textDecoration:'underline',
                        fontSize:{xs:"1rem", md:"1.5rem"},
                    }}
                >
                    Dashboard
                </StyledLink>

            </Box>
        </Container>
    )
}

export default NotFound;