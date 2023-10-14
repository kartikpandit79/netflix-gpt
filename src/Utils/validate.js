// At least one digit [0-9]
// At least one lowercase character [a-z]
// At least one uppercase character [A-Z]
// At least one special character [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\]
// At least 8 characters in length, but no more than 32.

export const validateData = (email, password, isName, name) => {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let isEmailValid = emailRegex.test(email);
    // let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\~_+-=|\]).{8,32}$/
    let passwordRegex = /123/
    let isPasswordValid = passwordRegex.test(password);
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (isName) {
        if (name.length === 0) return "Name field can't be empty";
        if (name.length < 4) return "Invalid Name field";
    }
    return null;
}