import PasswordValidator from "password-validator";


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

function validPassword(password) {
    const missingReqs = schema.validate(value, {list:true});
    if (missingReqs.length > 0){
        return false
    } else {
        return true
    }
}

export async function handleLogin(event, username, password, setErrors, setLoading) {
    event.preventDefault();
    console.log("we're in pardner")
}