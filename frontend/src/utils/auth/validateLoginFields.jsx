// import { Box, Button, Container, FormHelperText, Grid2, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import LockIcon from '@mui/icons-material/Lock';
// import { useState } from "react";
// import axios from "../api/axios";
// import useSignIn from 'react-auth-kit/hooks/useSignIn';
// import PasswordValidator from "password-validator";
// import { useNavigate, Link } from "react-router-dom";

// var schema = new PasswordValidator()
// schema
// .is().min(8)                                 
// .is().max(100)                                  
// .has().uppercase()                             
// .has().lowercase()                              
// .has().digits(1)    
// .has().symbols(1)                            
// .has().not().spaces()                           
// .is().not().oneOf(['Password', 'Password123']); 

// export function handlePasswordChange = (e) => {
//     const value = e.target.value
//     setPassword(value)

//     const missingReqs = schema.validate(value, {list:true});
//     if (missingReqs.length > 0){
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             password: 'Invalid Password',
//             login: ''
//         }));
//     } else {
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             password: '',
//             login: ''
//         }));
//     }
// }