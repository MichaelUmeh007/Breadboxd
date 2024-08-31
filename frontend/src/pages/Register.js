import { Box, Button, Container, Grid2, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';

const Regsiter = () => {

    const theme = useTheme()

    return (
        <Container 
            maxWidth={false}
            disableGutters
            sx={{
                height: '110vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'url(/images/registerbackground.jpg)',
                display:"flex",
                alignItems:"center",
                justifyContent:"center"



            }}>
            <Box
                    sx={{
                        width:"100%",
                        height:"100%",
                        top: 0,
                        left: 0,
                        background: 'rgba(0, 0, 0, 0.4)', 
                      }}
            >
                <Box sx={{
                    position:"fixed",
                    display:"flex",
                    flexDirection:'column',
                    alignItems: "center"
                }}>
                    <Typography variant="h1"
                        sx={{
                            marginTop: "3%",
                            textAlign:"center",
                            fontWeight:"bold",
                            marginBottom: theme.spacing(4),
                            color:"wheat"
                            }}>
                        Stop gatekeeping Grandma's favourites, start sharing today!
                    </Typography>
                    <Box sx={{width:"360px"}}>
                        <Box
                            sx={{
                                marginTop: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#5c3202",
                                borderRadius: theme.spacing(1),
                                width:"100%"
                            }}
                        >
                            <Typography variant="h4" component={"h5"} 
                                sx={{
                                    color:"white",
                                    fontFamily:"monospace",
                                    marginTop:2,
                                    mb:0,
                                    fontWeight:"bold"}}>
                                Sign Up
                            </Typography>

                            <Box component={"form"}
                                sx={{marginTop:3, marginBottom:3,
                                width:'100%',
                                display:"flex",
                                justifyContent:"center",
                                flexDirection:"column"}}>

                                <Grid2 container spacing={2}
                                    sx={{
                                        flexDirection:"column",
                                        flexGrow:1,

                                    }}>
                                    <Grid2 item xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                                sx={{
                                                    backgroundColor:"white",
                                                    borderRadius:theme.spacing(1.5)
                                                }}
                                                slotProps={{
                                                    input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                        <AccountCircle />
                                                        </InputAdornment>
                                                    ),
                                                    },
                                                }}
                                                required
                                                fullWidth
                                                variant="outlined"
                                                id="username"
                                                name="username"
                                                placeholder="Username"
                                                autoComplete="username"
                                            />
                                    </Grid2>

                                    <Grid2 item xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                                sx={{
                                                    backgroundColor:"white",
                                                    borderRadius:theme.spacing(1.5)
                                                }}
                                                slotProps={{
                                                    input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                        <PersonIcon />
                                                        </InputAdornment>
                                                    ),
                                                    },
                                                }}
                                                required
                                                fullWidth
                                                variant="outlined"
                                                id="firstname"
                                                name="firstname"
                                                placeholder="First Name"
                                                autoComplete="firstname"
                                            />
                                    </Grid2>

                                    <Grid2 item xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                                sx={{
                                                    backgroundColor:"white",
                                                    borderRadius:theme.spacing(1.5)
                                                }}
                                                slotProps={{
                                                    input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                        <PersonOutlineIcon />
                                                        </InputAdornment>
                                                    ),
                                                    },
                                                }}
                                                required
                                                fullWidth
                                                variant="outlined"
                                                id="lastname"
                                                name="lastname"
                                                placeholder="Last Name"
                                                autoComplete="lastname"
                                            />
                                    </Grid2>

                                    <Grid2 item xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                                sx={{
                                                    backgroundColor:"white",
                                                    borderRadius:theme.spacing(1.5)
                                                }}
                                                slotProps={{
                                                    input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                        <AlternateEmailIcon />
                                                        </InputAdornment>
                                                    ),
                                                    },
                                                }}
                                                required
                                                fullWidth
                                                variant="outlined"
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Email Address"
                                                autoComplete="email"
                                            />
                                    </Grid2>

                                    <Grid2 item xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                                sx={{
                                                    backgroundColor:"white",
                                                    borderRadius:theme.spacing(1.5)
                                                }}
                                                slotProps={{
                                                    input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                        <LockIcon />
                                                        </InputAdornment>
                                                    ),
                                                    },
                                                }}
                                                required
                                                fullWidth
                                                variant="outlined"
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                            />
                                    </Grid2>
                                </Grid2>

                                <Button
                                    
                                    variant="contained"
                                    size="Medium"
                                    sx={{marginTop:theme.spacing(3), backgroundColor:"#0d7544", maxWidth:"40%", left:"30%"}}>
                                    Register
                                </Button>

                            </Box>
                        </Box>    
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Regsiter;
