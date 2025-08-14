
// Types of Login Error defined in enum
enum LoginError {
    Unauthorized = "Unauthorized",
    WrongCredentials = "Wrong Credentials",
    InternalError = "Internal Error",
    NoUser = "No User",
}

const printErrorMsg = ( error: LoginError) => {

    if(error == LoginError.Unauthorized) {
        console.log("Unauthorized");
    }
    else if(error == LoginError.WrongCredentials) {
        console.log("Wrong Credentials");
    }
    else if(error == LoginError.InternalError) {
        console.log("Internal Error");
    }
    else if(error == LoginError.NoUser) {
        console.log("No User");
    }
 
}

// Use: When you already know the type of error











