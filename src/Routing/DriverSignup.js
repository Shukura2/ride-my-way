import React, {useState} from "react";
import validation from "./SignupValidation";
import { Link } from "react-router-dom";
import axios from 'axios'
import { connect, useDispatch } from "react-redux";
import { setCurrentDriver, setSignupError } from "../reducers/authSliceDriver";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DriverSignup = (props) => {
const [values, setValues] = useState({
  fullName:"",
  email:"",
  password:""
});

const [errors, setErrors] = useState({});
const history = useHistory()
const dispatch = useDispatch()

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
      const res = await axios.post('http://localhost:3000/v1/drivers/register', values)
      console.log(res, 'res for driver signup');
      localStorage.setItem("driver", JSON.stringify(res.data.token))
      dispatch(setSignupError({signupError: ""})) 
      dispatch(setCurrentDriver(res.data.driver))
      history.push('/dashboard-driver')
      const notify = () => toast(res.data.message);
      notify() 
     
    }
    catch (err) {
      dispatch(setSignupError({signupError: err.response.data.message})) 
    }
  };

  return (
    <div className="drive">
      <div className="ride-form">
        <h3 className='heading'>Signup to Drive</h3>
        <span style={{color:'red'}}>{props.authDriver.signupError}</span>
        <form className='form-wrapper'>
          <div className='name'>
            <label className='details'>Full Name</label>
            <input className='input' type='text'  name='fullName' value={values.fullName} onChange={handleChange}/>
            {errors.fullName && <p className="error"> {errors.fullName} </p>}
          </div>
          <div className='email'>
            <label className='details'>Email</label>
            <input className='input' type='text' name='email' value={values.email} onChange={handleChange}/>
            {errors.email && <p className="error"> {errors.email} </p>}

          </div>
          <div className='password'>
            <label className='details'>Password</label>
            <input className='input text' type='password' name='password' value={values.password} onChange={handleChange} />
            {errors.password && <p className="error"> {errors.password} </p>}

          </div>
          <div>
            <button className='submit' onClick={handleFormSubmit}>Signup</button>
          </div>
          <Link to='/driver-login' className='form-dir'>Already had an account? <span className='span'> Login </span>  </Link>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, 'map store driver')
  return {
    authDriver: state.authDriver
  }
}

export default connect(mapStateToProps)(DriverSignup);