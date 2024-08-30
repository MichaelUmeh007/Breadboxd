import { Box, Container, Grid2, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';

const Regsiter = () => {

    const theme = useTheme()

    return (
        <Container maxWidth="lg">
            <Typography variant="h1" sx={{textAlign:"center"}}>
                Stop gatekeeping Grandma's favourites, start sharing today!
            </Typography>
            <Container maxWidth="xs" sx={{marginTop:"3%"}}>
                <Box
                    sx={{
                        marginTop: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#5c3202",
                        borderRadius: theme.spacing(0.5),
                        width:"100%"
                    }}
                >
                    <Typography variant="h3" component={"h5"} 
                        sx={{
                            color:"white",
                            fontFamily:"monospace",
                            marginTop:2,
                            mb:0,
                            fontWeight:"bold"}}>
                        Register
                    </Typography>

                    <Box component={"form"}
                        sx={{marginTop:3, marginBottom:3,
                        width:'100%',
                        display:"flex",
                        justifyContent:"center"}}>

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
                                        variant="filled"
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
                                        variant="filled"
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
                                        variant="filled"
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
                                        variant="filled"
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
                                        variant="filled"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>    
            </Container>


            

        </Container>
    );
}

export default Regsiter;


// import React, { useState } from 'react';
// import { TextField, Button, Grid, Container, Typography, Box } from '@mui/material';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you would typically handle the form submission,
//     // such as sending the data to an API or performing validation.
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Register
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Full Name"
//                 name="name"
//                 autoComplete="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Register
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Register;
