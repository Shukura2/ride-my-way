import React from 'react'
import NavbarDashoard from "../Components/DashoardNavsUser";
import { Link } from "react-router-dom";
import { useState } from 'react';
import * as FaIcons from "react-icons/fa";

const RideHistory = () => {

    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    <NavbarDashoard />
    const history = [
        {date: '13-08-21', destination: 'Bariga', amount: 2000, status: 'pending'},
        {date: '13-08-21', destination: 'Ikeja', amount: 2500, status: 'completed'},
        {date: '13-08-21', destination: 'Island', amount: 1000, status: 'pending'}
    ]

    const renderHistory = (history) => {
        return(
            <tr key={history}>
                <td className='td'>{history.date}</td>
                <td className='td'>{history.destination}</td>
                <td className='td'>{history.amount}</td>
                <td className='td'>{history.status}</td>
            </tr>
        )
    }
        
    return (
        <div>
             <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h3 className="navc">Ride my way</h3>
        </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='td th'>Date</th>
                        <th className='td th'>Amount</th>
                        <th className='td th'>Date / Time</th>
                        <th className='td th'>Destination</th>
                    </tr>
                </thead>
            
                <tbody>
                    
                </tbody>
            </table>
           
        </div>
    )
}

export default RideHistory;
