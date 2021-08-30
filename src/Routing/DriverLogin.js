import React, { useState } from "react";
import validation from "./LoginValidation";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';
import { loginDriver, setLoginDriverError } from "../reducers/loginSliceDriver";


const DriveLogIn = (props) => {

  const [values, setValues] = useState({
    email:"",
    password:""
  })

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch()
  const history = useHistory()

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
    const res = await axios.post('http://localhost:3000/v1/driver/login', values)
    console.log(res, 'mmmmmmmmm');
    localStorage.setItem('driver', JSON.stringify(res.data.token))
    dispatch(setLoginDriverError({loginErrors: ""}))
    history.push('/dashboard-driver')
    const notify = () => toast(res.data.message);
    notify()
    dispatch(loginDriver(res.data.driver))
    
  } catch (err) {
    // console.log(err.response, 'error response driver login');
    dispatch(setLoginDriverError({loginErrors: err.response.data.message}))
  }
}


  return (
    <div className="drive">
      <form className="login-form">
      <h3 className='heading'>Driver Login</h3>
      <span style={{color:'red'}}>{props.driver.loginErrors}</span>
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
          <Link to='/driver-signup' className='form-dir'>Not registered? <span className='span'> Create Account </span>  </Link>
        </form>



      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    driver: state.driver
  }
}

export default connect(mapStateToProps)(DriveLogIn);
