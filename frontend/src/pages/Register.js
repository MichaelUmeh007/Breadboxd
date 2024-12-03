import { Box, Button, Container, FormHelperText, Grid2, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import axios from "../api/axios";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import PasswordValidator from "password-validator";
import { useNavigate } from "react-router-dom";

const Regsiter = () => {

    const url = '/api/public'

    const theme = useTheme()

    const signIn = useSignIn()

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        registration: '',
    })

    var schema = new PasswordValidator()
    schema
    .is().min(8)                                 
    .is().max(100)                                  
    .has().uppercase()                             
    .has().lowercase()                              
    .has().digits(1)    
    .has().symbols(1)                            
    .has().not().spaces()                           
    .is().not().oneOf(['Password', 'Password123']); 

    var usernameSchema = new PasswordValidator();
    usernameSchema.has().not().spaces();

    const validationErrorMessages = {
        'min': 'Minimum length of 8',
        'max': 'Maximum length of 100',
        'uppercase': 'Must include uppercase letter',
        'lowercase': 'Must include lowercase letter',
        'digits': 'Must include at least 1 digit',
        'symbols': 'Must include at least 1 symbol',
        'spaces': 'Cannot include spaces',
        'oneOf': 'Too common'

    }

    const handleUsername = async (e) => {

        setErrors((prevErrors) => ({
            ...prevErrors,
                registration: ''
        }));

        const value = e.target.value
        setUsername(value)
        if (!usernameSchema.validate(value)){
            setErrors((prevErrors) => ({
                ...prevErrors,
                    username: 'Spaces not permitted in username'
            }));
            return
        }
        

        try {

            const response = await axios.get(url + "/users/check-username", 
                {
                    params: {username: value}
                }
            )
            
            if (response.data) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                        username: 'Username is already taken'
                }));
            }
            else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                        username: ''
                }));
            }
            
        } catch (error) {
            console.error('Username Uniqueness Check Error', error)
        }
    }

    const handleEmail = async (e) => {

        setErrors((prevErrors) => ({
            ...prevErrors,
                registration: ''
        }));
 
        const value = e.target.value
        setEmail(value)

        try {

            const response = await axios.get(url + "/users/check-email", 
                {
                    params: {email: value}
                }
            )
            
            if (response.data) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                        email: 'Email already in use'
                }));
            }
            else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                        email: ''
                }));
            }
            
        } catch (error) {
            console.error('Email Uniqueness Check Error', error)
        }
    }

    const handlePassword = (e) => {

        setErrors((prevErrors) => ({
            ...prevErrors,
                registration: ''
        }));

        const value = e.target.value
        setPassword(value)

        const missingReqs = schema.validate(value, {list:true});
        if (missingReqs.length > 0){
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: validationErrorMessages[missingReqs[0]]
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: ''
            }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!errors.username && !errors.password && !errors.email){

            try {

                const response = await axios.post(url + '/auth/register',
                    {
                        "username" : username,
                        "password" : password,
                        "firstname" : firstname,
                        "lastname" : lastname,
                        "email" : email
                    }
                )

                if (response.status === 200){
                    if (
                        signIn({
                            auth: {
                                token: response.data.token,
                                type: 'Bearer'
                            },
                            userState: {
                                username: username
                            }
                        })
                    ) {
                        navigate('/dashboard')
                    }
                    else {
                        navigate('/login')
                    }
                }

            } catch (error) {
                console.error('Error with registration', error)
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    registration: "Registration failed. Please try again."
                }))
            }



            

        }

        console.log("attempted submission")
    
    }

    return (
        <Container 
            maxWidth={false}
            disableGutters
            sx={{
                height: '105vh',
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
                            marginTop: "1%",
                            textAlign:"center",
                            fontWeight:"bold",
                            marginBottom: theme.spacing(2),
                            color:"wheat"
                            }}>
                        Stop gatekeeping Grandma's favourites. Start sharing today!
                    </Typography>
                    <Box sx={{width:"360px"}}>
                        <Box
                            sx={{
                                marginTop: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: theme.palette.breadbrown.main,
                                borderRadius: theme.borderRadius,
                                width:"100%"
                            }}
                        >
                            <Typography variant="h4" component={"h5"} 
                                sx={{
                                    color:"white",
                                    fontFamily:"monospace",
                                    marginTop:2,
                                    mb:2,
                                    fontWeight:"bold"}}>
                                Sign Up
                            </Typography>

                            {errors.registration && <FormHelperText sx={{color:"red", fontSize:20, mb:"1"}}>
                                            {errors.registration}
                            </FormHelperText>}

                            <Box component={"form"}
                                onSubmit={handleSubmit}
                                sx={{marginTop:0, marginBottom:3,
                                width:'100%',
                                display:"flex",
                                justifyContent:"center",
                                flexDirection:"column"}}>

                                <Grid2 container spacing={2}
                                    sx={{
                                        flexDirection:"column",
                                        flexGrow:1,

                                    }}>
                                    <Grid2 xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                            error={errors.username !== ''}
                                            onChange={handleUsername}
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
                                        <FormHelperText sx={{color:"red", fontSize:14}}>
                                                    {errors.username}
                                                </FormHelperText>
                                    </Grid2>

                                    <Grid2 xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField

                                            onChange={(e) => {
                                                setFirstname(e.target.value)
                                            }}

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

                                    <Grid2 xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                            onChange={(e) => {
                                                setLastname(e.target.value)
                                            }}
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

                                    <Grid2 xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                            error={errors.email !== ''}
                                            onChange={handleEmail}
                                            

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
                                        <FormHelperText sx={{color:"red", fontSize:14}}>
                                            {errors.email}
                                        </FormHelperText>
                                    </Grid2>

                                    <Grid2 xs={12} sx={{paddingLeft:theme.spacing(2), paddingRight:theme.spacing(2)}}>
                                        <TextField
                                            error={errors.password !== ''}
                                            onChange={handlePassword}
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
                                        <FormHelperText sx={{color:"red", fontSize:14}}>
                                            {errors.password}
                                        </FormHelperText>
                                    </Grid2>
                                </Grid2>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="Medium"
                                    sx={{marginTop:theme.spacing(2), backgroundColor:"#0d7544", maxWidth:"40%", left:"30%"}}>
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
