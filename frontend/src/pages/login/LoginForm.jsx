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
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import AuthHeader from "../../components/AuthHeader";

export const LoginForm = () => {
    const theme = useTheme();
    return (

        <AuthCard>
            <AuthHeader/>
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
                Sign in
            </Typography>

            <Box component="form" 
                sx={{
                width: '100%',
                display: "flex",
                flexDirection: "column",
                gap: 2
                }}>

                <FormControl>
                    <TextField
                    sx={{ backgroundColor: "white", borderRadius: theme.borderRadius * 1.5 }}
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
                    <FormHelperText sx={{ color: "red", fontSize: 14 }} />
                </FormControl>


                <FormControl>
                    <TextField
                    sx={{ backgroundColor: "white", borderRadius: theme.spacing(1.5) }}
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
                    <FormHelperText sx={{ color: "red", fontSize: 14 }} />
                </FormControl>

                <Button
                type="submit"
                variant="contained"
                size="Medium"
                sx={{ marginTop: theme.spacing(2), backgroundColor: "#0d7544", maxWidth: "40%", left: "30%" }}
                >
                Login
                </Button>

                <Box sx={{ display: "flex", flexDirection: 'row', mt: '3%', justifyContent: 'center' }}>
                <Typography sx={{ mr: 1, color: 'wheat' }}>
                    New to Breadboxd?
                </Typography>
                <Link style={{ color: '#87CEEB' }} > Sign Up</Link>
                </Box>
            </Box>

        </AuthCard>

    )
}