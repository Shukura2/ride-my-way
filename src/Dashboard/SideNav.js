import React from 'react';
import { Link } from 'react-router-dom';


const Sidenav = () => {
    return(
        <div className='sidebar'>
            <section className='sb-brand'>
                <h3>Ride-My-Way</h3>
            </section>
            <section className='links-container'>
               <div className='links'>
                    <div className='icon'>
                        <i class="fas fa-house-user"></i>
                    </div>
                    <Link to='/dashboard'>Dashboard</Link>
               </div>
               <div className='links'>
                    <div className='icon'>
                        <i class="fas fa-external-link-square-alt"></i>
                    </div>
                    <Link to ='/requests'>Today's Request</Link>
               </div>
               <div className='links'>
                    <div className='icon'>
                        <i class="fas fa-comments"></i>
                    </div>
                    <span>Reviews</span>
               </div>
               <div className='links'>
                    <div className='icon'>
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <span>Payment</span>
               </div>
               <div className='links'>
                    <div className='icon'>
                        <i class="fas fa-cog"></i>
                    </div>
                    <span>Settings</span>
               </div>
               <div className='links'>
                    <div className='icon'>
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                    <span>Logout</span>
               </div>

            </section>
        
        </div>
    )
}

export default  Sidenav;