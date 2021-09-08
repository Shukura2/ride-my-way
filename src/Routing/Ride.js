import React from "react";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'
import AuthHook from "./AuthHook";

const Ride = (props) => {
const {handleFormSubmit, errors, setValues, values} = AuthHook()

  const handleChange = (event) => {
  setValues({
    ...values,
    [event.target.name]:event.target.value,
  }) 
}

  return (
    <div className="ride-backround-img">
      <div className="ride-form">
        <h3 className='heading'>CREATE ACCOUNT</h3>
        <span style={{color:'red'}}>{props.auth.signupError}</span>
        <form className='form-wrapper' onSubmit={handleFormSubmit} >
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
            <button className='submit'>CREATE ACCOUNT</button>
          </div>
          <Link to='/login' className='form-dir'>Already had an account? <span className='span'> Login </span>  </Link>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, 'map store')
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Ride);
 