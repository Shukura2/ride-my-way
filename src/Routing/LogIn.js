import React from 'react';
import {Link} from "react-router-dom"

const LogIn = () => {
    return(
        <div className='login-bckgrnd-img'>
           <form className='login-form'>
               <input type= 'text' placeholder='Username'/> <br />
               <input type= 'password' placeholder='Password'/> <br />
               <button className='login'>LOGIN</button>
               <p className='logs'>Not Registered? <Link to='/ride' className='createcolor'>Create Account</Link></p>
           </form>
        </div>
    )
}

export default  LogIn;