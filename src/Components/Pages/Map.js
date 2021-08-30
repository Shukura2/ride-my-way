import React, { useEffect, useState } from "react";
import toyota from "../../Images/SE_-_2020_Toyota_Camry.png";
// import { Link } from "react-router-dom";
import cartoon from "../../Images/download-2.jpg";
import axios from "axios";
import { useSelector } from "react-redux";
import DashboardNavs from "../../Routing/DashboardNavs";
// import { FaStar } from "react-icons/fa";
import DashoardNavsUser from '../DashoardNavsUser'
import MapRender from "./MapRender";

function Map() {
  const state = useSelector(state => state)
  const [joinRide, setJoinRide] = useState([])

  const handleChange = async () => {
    
      try {

        const token = JSON.parse(localStorage.getItem('user'))

        const res = await axios({
          baseURL: 'http://localhost:3000/v1/offers',
          method: 'get',
         
          headers : {
            Authorization: `Bearer ${token}`
          }

      })
      setJoinRide(res.data)
      } catch (error) {
        console.log(error);
      }
  }

  useEffect( () => {
    handleChange()
  }, [] )

  return (
    <div className="map-wrap">
      <DashoardNavsUser />
      <div className="flex-container-parent">
        <div className="flex-container-info">
          {/* <img src={toyota} className="flex-c-img" alt="toyota" />
          <h4>AGL 666 DN</h4> */}

          <div className="flex-c-users">
            <div className="fcu-img">
              
            </div>
        
            
            {
              joinRide.map(joinRides => <MapRender destination={joinRides.destination} amount={joinRides.amount} /> )
            }
            
          </div>
          <button className="button">
            Join Ride
          </button>
        </div>
      </div>
    </div>
  );
}

export default Map;
