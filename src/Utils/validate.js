export const checkValidData = function (email, passWord) {
    //use regex
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passWord);
    
    if (!isEmailValid) {
        return "Email Id is Not Valid";

    }
    if (!isPassValid) return "Password is not valid";
    
    return null;
}