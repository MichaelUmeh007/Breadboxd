import { Box, Button, Container, FormHelperText, Grid2, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import axios from "../api/axios";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import PasswordValidator from "password-validator";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const url = '/api/public'

    const theme = useTheme()

    const signIn = useSignIn()

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({
        username: '',
        password: '',
        login: '',
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

   
    const handleUsername = async (e) => {
        const value = e.target.value
        setUsername(value)
        if (!usernameSchema.validate(value)){
            setErrors((prevErrors) => ({
                ...prevErrors,
                    username: 'Not a regsitered user',
                    login: ''
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
                        username: '',
                        login: ''
                }));
            }
            else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                        username: 'Not a registered user',
                        login: ''
                }));
            }
            
        } catch (error) {
            console.error('Username Validity Check Error', error)
        }
    }
    const handlePassword = (e) => {
        const value = e.target.value
        setPassword(value)

        const missingReqs = schema.validate(value, {list:true});
        if (missingReqs.length > 0){
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Invalid Password',
                login: ''
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: '',
                login: ''
            }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!errors.username && !errors.password){

            try {

                const response = await axios.post(url + '/auth/authenticate',
                    {
                        "username" : username,
                        "password" : password,
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
                        console.error('Error with login')
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            login: "Authentication error, please try again."
                        }))
                    }
                }

            } catch (error) {
                console.error('Error with login', error)
                if (error.status === 403)
                    {setErrors((prevErrors) => ({
                        ...prevErrors,
                        password: "Incorrect Password. Please try again.",
                        login: ''
                    }))}
                else {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        login: "Login error. Try again later."
                    }))
                }
            }



            

        }

    
    }

    return (
        <Container 
            maxWidth={false}
            disableGutters
            sx={{
                height: '110vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'url(/images/loginbackground.jpg)',
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
                        background: 'rgba(0, 0, 0, 0.5)', 
                      }}
            >
                <Box sx={{
                    position:"fixed",
                    display:"flex",
                    flexDirection:'column',
                    alignItems: "center",
                    top: '5%',
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                    <Typography variant="h1"
                        sx={{
                            pl: "25%",
                            pr: "25%",
                            textAlign:"center",
                            fontWeight:"bold",
                            marginBottom: theme.spacing(2),
                            color:"wheat"
                            }}>
                        What's Looking, Good Cooking?
                    </Typography>
                    <Box sx={{width:"360px"}}>
                        <Box
                            sx={{
                                marginTop: 5,
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
                                    mb:1,
                                    fontWeight:"bold"}}>
                                Sign In
                            </Typography>

                            {errors.login && <FormHelperText sx={{color:"red", fontSize:20, mb:"1"}}>
                                            {errors.login}
                            </FormHelperText>}

                            <Box component={"form"}
                                onSubmit={handleSubmit}
                                sx={{marginTop:1, marginBottom:3,
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
                                                borderRadius:theme.borderRadius * 1.5
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
                                    Login
                                </Button>

                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection: 'row',
                                        mt:'3%',
                                        justifyContent: 'center'}}
                                >
                                    <Typography
                                        sx={{
                                            mr:1,
                                            color:'wheat'
                                        }}>
                                        New to Breadboxd? 
                                    </Typography>
                                    <Link style={{color:'#87CEEB'}} to="/register"> Sign Up</Link>
                                </Box>
                                
                            </Box>
                        </Box>    
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;