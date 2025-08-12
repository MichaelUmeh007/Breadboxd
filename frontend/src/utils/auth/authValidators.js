import PasswordValidator from "password-validator";

const schema = new PasswordValidator()
schema
.is().min(8)                                 
.is().max(100)                                  
.has().uppercase()                             
.has().lowercase()                              
.has().digits(1)    
.has().symbols(1)                            
.has().not().spaces()                           
.is().not().oneOf(['Password', 'Password123']); 

export const validationErrorMessages = {
    'min': 'Minimum length of 8',
    'max': 'Maximum length of 100',
    'uppercase': 'Must include uppercase letter',
    'lowercase': 'Must include lowercase letter',
    'digits': 'Must include at least 1 digit',
    'symbols': 'Must include at least 1 symbol',
    'spaces': 'May not contain spaces',
    'oneOf': 'A little more creativity'

}

export function validatePassword(password) {
    const missingReqs = schema.validate(password, {list:true});
    console.log(missingReqs)
    if (missingReqs.length > 0){
        return false
    } else {
        return true
    }
}

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

export function getPasswordValidationErrors(password){
    return schema.validate(password, {list : true});
}

const usernameSchema = new PasswordValidator();
usernameSchema.has().not().spaces();

export function getUsernameValidationErrors(username){
    return usernameSchema.validate(username, {list : true});
}
