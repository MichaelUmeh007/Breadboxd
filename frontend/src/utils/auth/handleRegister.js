import axiosInstance from "../../api/axiosInstance";
import { 
    validationErrorMessages,
    getPasswordValidationErrors,
    getUsernameValidationErrors
} from "./authValidators";



export async function handleRegister(
    event, username, email, password, setErrors, setLoading
) {
    event.preventDefault();

    const url = '/api/public/'
    
    setLoading(true);
    setErrors({ username: '', email: '', password: '', login: '' });

    // Check Username validity
    const UsernameErrors = getUsernameValidationErrors(username);
    if (UsernameErrors.length > 0) {
        setErrors(prev => ({ ...prev, username: validationErrorMessages[UsernameErrors[0]]}))
        setLoading(false);
        return;
    }

    // Check Password validity
    const passwordErrors = getPasswordValidationErrors(password);
    if (passwordErrors.length > 0) {
        setErrors(prev => ({ ...prev, password: validationErrorMessages[passwordErrors[0]]}))
        setLoading(false);
        return;
    }

    
    // try {

    //     // Check username validity
    //     const userExists = await axiosInstance.get(url + 'users/check-username', 
    //         {params:{username:username}}
    //     )
    //     if (!userExists.data){
    //         setErrors(prev => ({...prev, username: 'User not found'}))
    //         setLoading(false);
    //         return;
    //     }
        
    //     // Attempt login
    //     const loginResponse = await axiosInstance.post(url + 'auth/authenticate',
    //         {
    //             'username':username,
    //             'password':password
    //         }
    //     )
        
    //     if (loginResponse.status === 200){
    //         console.log('Handle successful login')
    //     }

    // }



    // catch (error) {
    //     if (error.response && error.response.status === 403){
    //         setErrors(prev => ({
    //             ...prev, password: 'Incorrect password'
    //         }))
    //     }
    //     else {
    //         setErrors(prev => ({...prev, login: 'Server Error. Try again later'}));
    //     }
        
    // }

    // finally {
    //     setLoading(false);
    // }
}
