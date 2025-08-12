import { keyframes } from "@emotion/react";
import axiosInstance from "../../api/axiosInstance";
import { 
    validationErrorMessages,
    getPasswordValidationErrors,
    getUsernameValidationErrors,
    validateEmail
} from "./authValidators";



export async function handleRegister(
    event, username, firstname, lastname, email, password, setErrors, setLoading
) {
    event.preventDefault();

    const url = '/api/public/'
    
    setLoading(true);
    setErrors({ username: '', email: '', password: '', registration: '', firstname: '', lastname: '' });

    // Check Username validity
    const UsernameErrors = getUsernameValidationErrors(username);
    if (UsernameErrors.length > 0) {
        setErrors(prev => ({ ...prev, username: validationErrorMessages[UsernameErrors[0]]}))
        setLoading(false);
        return;
    }

    // Check email validity
    if (!validateEmail(email)){
        setErrors(prev => ({...prev, email: "Please provide a valid email address"}))
        setLoading(false)
        return;
    }

    // Check Password validity
    const passwordErrors = getPasswordValidationErrors(password);
    if (passwordErrors.length > 0) {
        setErrors(prev => ({ ...prev, password: validationErrorMessages[passwordErrors[0]]}))
        setLoading(false);
        return;
    }
    
    try {

        // Check username availability
        const userExists = await axiosInstance.get(url + 'users/check-username', 
            {params:{username:username}}
        )
        if (userExists.data){
            setErrors(prev => ({...prev, username: 'Username is already taken'}))
            setLoading(false);
            return;
        }

        // Check email availability
        const emailExists = await axiosInstance.get(url + 'users/check-email', 
            {params:{email:email}}
        )
        if (emailExists.data){
            setErrors(prev => ({...prev, email: 'Email is already in use'}))
            setLoading(false);
            return;
        }
        
        // Attempt registration
        const payload = {
                'username':username,
                'password':password,
                'email':email,
                'firstname':firstname,
                'lastname':lastname
            }
        const registerResponse = await axiosInstance.post(url + 'auth/register', payload)

        if (registerResponse.status === 200){
            console.log('Handle successful register')
        }

    }



    catch (error) {
        if (error.response && error.response.status === 400){
           setErrors(error.response.data);
        } 
        else {
            setErrors(prev => ({...prev, registration: 'Server Error. Try again later'}));
        }
        
    }

    finally {
        setLoading(false);
    }
}
