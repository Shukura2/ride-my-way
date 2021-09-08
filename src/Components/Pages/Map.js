import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DashoardNavsUser from "../DashoardNavsUser";
import MapRender from "./MapRender";

function Map() {
  const state = useSelector((state) => state.offers);
  const [joinRide, setJoinRide] = useState([]);

  const handleChange = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));

      const res = await axios({
        baseURL: "http://localhost:3000/v1/offers",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJoinRide(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div className="map-wrap">
      <DashoardNavsUser />
      <div className='flex-container-parent'>
      {joinRide.map((joinRides) => {
        return (
            <div className="flex-container-info">
            <MapRender
              destination={joinRides.destination}
              amount={joinRides.amount}
              id={joinRides.offerId}
              fullName={joinRides.fullName}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Map;
