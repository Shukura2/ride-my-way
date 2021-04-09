import React from 'react';

import {Link} from "react-router-dom"

const Ride = () => {
    return(
        <div className='ride-backround-img'>
            <div className='ride-form'>
                <form className='ride-form-info'>
                    <input type='text' placeholder='Your name'/> <br/>
                    <input type='text' placeholder='Email address'/> <br/>
                    <input type='text' placeholder='Phone number'/><br/>
                    <input type='text' placeholder='From Destination'/><br/>
                    <input type='text' placeholder='To Destination'/><br/>
                    <input type='text' placeholder='Date & time'/><br/>
                    <button className='make-reserve'>CREATE ACCOUNT</button>
                    <p className='account'>Already had an account? <Link to='/login' className='account-color'>Login</Link></p>
                </form>

            </div>
        </div>
    )
}

export default  Ride;