import React from 'react'
import { Link } from "react-router-dom";


const BannerTwo = () =>{
    return(
        <div className="background-img-container">
            <div className='banner2'>
                <div className='banner2-firstContent'>
                    <h2>  Earn extra money driving</h2>
                    <h4> Set your own schedule, be your own boss.</h4>
                </div>
                <div className='banner2-secondContent banner2'>
                    <Link to='/driver-signup' className>SIGN UP TO DRIVE</Link>
                </div>
            </div>
        </div>
    )
}

export default BannerTwo;