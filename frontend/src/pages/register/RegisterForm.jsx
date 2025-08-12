import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import AuthCard from "@/components/AuthCard";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import Logo from "../../components/Logo";
import LogoTitle from "../../components/LogoTitle";
import { useState, useEffect } from "react";
import { handleRegister } from "../../utils/auth/handleRegister";


export const RegisterForm = () => {

    const theme = useTheme();
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        registration: '',
    })


    return (

        <AuthCard>
            <Box display={{sm:'none'}}>
                <LogoTitle/>
            </Box>
            <Typography
                component="h1"
                variant="h4"
                sx={{ 
                    width: '100%',
                    fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'bold',
                    color: 'white',
                    justifyContent:'center',

                    [theme.breakpoints.down('sm')]: {
                    display:'none'
                    }
                }}
            >
                Sign up
            </Typography>


            {errors.registration && 
            <FormHelperText sx={{color:"white", fontSize:15}}>
                            {errors.registration}
            </FormHelperText>}

            <Box 
                component="form"
                onSubmit={(e) => handleRegister(e, username, firstname, lastname, email, password, setErrors, setLoading)} 
                sx={{
                width: '100%',
                display: "flex",
                flexDirection: "column",
                gap: 2
                }}>

                <FormControl>
                    <TextField
                    sx={{ backgroundColor: "white", borderRadius: theme.borderRadius }}
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
                    onChange={(e) => {setUsername(e.target.value); setErrors(prev => ({...prev, username:''}))}}
                    helperText={errors.username}
                    error={!!errors.username}
                    
                    />
                </FormControl>

                <FormControl>
                    <TextField
                    sx={{ backgroundColor: "white", borderRadius: theme.borderRadius }}
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
                    onChange={(e) => {setFirstname(e.target.value);}}
                    placeholder="First Name"
                    autoComplete="firstname"    
                    helperText={errors.firstname}
                    error={!!errors.firstname}      
                    />  
                </FormControl>

                <FormControl>
                    <TextField
                    sx={{ backgroundColor: "white", borderRadius: theme.borderRadius }}
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
                    onChange={(e) => {setLastname(e.target.value);}}
                    placeholder="Last Name"
                    autoComplete="lastname"      
                    helperText={errors.lastname}
                    error={!!errors.lastname}          
                    />  
                </FormControl>

                <FormControl>
                    <TextField
                    sx={{ backgroundColor: "white", borderRadius: theme.borderRadius }}
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
                    placeholder="Email Address"
                    autoComplete="email"
                    onChange={(e) => {setEmail(e.target.value); setErrors(prev => ({...prev, email:''}))}}
                    helperText={errors.email}
                    error={!!errors.email}    
                    />
                </FormControl>

                <FormControl>
                    <TextField
                    sx={{ backgroundColor: "white", borderRadius: theme.borderRadius }}
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
                    onChange={(e) => {setPassword(e.target.value); setErrors(prev => ({...prev, password:''}))}}
                    placeholder="Password"
                    helperText={errors.password}
                    error={!!errors.password}
                    />
                    <FormHelperText sx={{ color: "red", fontSize: 14 }} />
                </FormControl>

                <Button
                type="submit"
                variant="contained"
                size="Medium"
                disabled={loading}
                sx={{ marginTop: theme.spacing(2), backgroundColor: "#0d7544", maxWidth: "40%", left: "30%" }}
                >
                Register
                </Button>

                <Box sx={{ display: "flex", flexDirection: 'row', mt: '3%', justifyContent: 'center' }}>
                <Typography sx={{ mr: 1, color: 'wheat' }}>
                    Already a member?
                </Typography>
                <Link style={{ color: '#87CEEB' }} > Login</Link>
                </Box>
            </Box>

        </AuthCard>

    )
}