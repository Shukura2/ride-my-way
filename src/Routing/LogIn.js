import React, { useState } from "react";
import validation from "./LoginValidation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../reducers/loginSlice";
import axios from "axios";
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { setLoginError } from '../reducers/loginSlice'
import { connect } from 'react-redux'

const LogIn = (props) => {

  const [values, setValues] = useState({
    email:"",
    password:""
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const [errors, setErrors] = useState({});
  console.log(errors)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]:event.target.value,
    })
  }
const handleFormSubmit = async (event) => {
  event.preventDefault();
  setErrors(validation(values));

  try {
    const res = await axios.post('http://localhost:3000/v1/user/login', values)
    localStorage.setItem('user', JSON.stringify(res.data.token))
    dispatch(setLoginError({loginError: ""}))
    history.push('/user-dashboard')
    const notify = () => toast(res.data.message);
    notify()
    dispatch(login(res.data.user))
  } catch (err) {
    dispatch(setLoginError({loginError: err.response.data.message}))
  }
}

  return (
    <div className="login-bckgrnd-img">
      <div className="login-form">
      <h3 className='heading'>Login</h3>
      <span style={{color:'red'}}>{props.user.loginError}</span>
        <form className='form-wrapper'>
          <div className='email'>
            <label className='details'>Email</label>
            <input className='input' type='text' name='email' value={values.email} onChange={handleChange}/>
            {errors.email && <p className="error"> {errors.email} </p>}
          </div>
          <div className='password'>
            <label className='details'>Password</label>
            <input className='input text' type='password' name='password' value={values.password} onChange={handleChange} />
            {errors.email && <p className="error"> {errors.password} </p>}
          </div>
          <div>
            <button className='submit' onClick={handleFormSubmit}>Login</button>
          </div>
          <Link to='/create-account' className='form-dir'>Not registered? <span className='span'> Create Account </span>  </Link>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(LogIn);
