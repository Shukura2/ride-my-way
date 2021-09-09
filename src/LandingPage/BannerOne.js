import React from 'react'
import { Link } from 'react-router-dom'

const BannerOne = () => {
    return(
        <div className='banner-design'>
            <div className='banner-design-content' >
                <p className='info'> Always the ride <br /> you want </p>
                <h3 className='info2'> Order a ride, hop in and let's go</h3>
                <Link to='/create-account' className='create-acc'> CREATE ACCOUNT </Link>
                <Link to='/login' className='create-acc'>LOGIN</Link> 
            </div>
            <div className='banner-design-content-two'>
                <img src='./Images/lukasz-niescioruk-Jy88u4IpIas-unsplash.jpg' className='imge' alt ='car steering'/>
            </div>

        </div>
    )
} 
export default BannerOne