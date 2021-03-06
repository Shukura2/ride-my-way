import React from 'react'

import {Link} from "react-router-dom"

let Navbar = () => {
    return(
        <div>
            <nav className='navigation-bar'>
                <input type="checkbox" id="check" /> 
                <label for="check" id="checkbtn"> <i className="fas fa-bars"></i> </label>

                <label className='company-name'> Ride-my-way </label>
                <ul className='navigation-list'>
                    <Link to='/dashboard'><li>Ride</li></Link>
                    <Link to='/drive'><li>Drive</li></Link>
                      <Link to='/cities'><li>Cities</li></Link>
                </ul>
            </nav> 
        </div>
    )
}
export default Navbar