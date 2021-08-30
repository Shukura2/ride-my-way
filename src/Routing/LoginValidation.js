const validation = (values) => {

    let errors = {};

    if(!values.email){
        errors.email = "Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid."
    }
    if (!values.password) {
        errors.password = "Password is required."
    } else if (values.password.length < 8){
        errors.password = "Password must be atleast 8 characters."
    } 
    return errors;
}
export default validation;

// const values = {email:"arass"}

// cons ans = !!values.email