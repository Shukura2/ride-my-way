import React from "react"
import validation from "./SignupValidation";
import axios from 'axios'
import { setCurrentUser, setSignupError } from '../reducers/authSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

const AuthHook = () => {
    const [values, setValues] = React.useState({
        fullName:"",
        email:"",
        password:""
    });
    const dispatch = useDispatch()
    const [errors, setErrors] = React.useState({});
    const history = useHistory()

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setErrors(validation(values));
       
        try {
          const res = await axios.post('http://localhost:3000/v1/users/register', values)
          console.log(res, 'res for signup');
          localStorage.setItem("user", JSON.stringify(res.data.token))
          dispatch(setSignupError({signupError: ""})) 
              
          history.push('/user-dashboard')
          const notify = () => toast(res.data.message);
          notify() 
          dispatch(setCurrentUser(res.data.user))
        }
        catch (err) {
          dispatch(setSignupError({signupError: err.response.data.message})) 
        }
      };
    return {handleFormSubmit, errors, setValues,values}
}

export default AuthHook

