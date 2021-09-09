import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MapRender = ({ id, destination, amount, fullName }) => {
  const handleJoinRide = async (offerId) => {
    const token = JSON.parse(localStorage.getItem("user"));
    try {
      const res = await axios({
        baseURL: `http://localhost:3000/v1/join/ride/${offerId}`,
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const notify = () => toast(res.data.message);
      notify();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <h5>Destination: {destination} </h5>
      <h5>Amount: {amount} </h5>
      <h5>Driver Name: {fullName}</h5>
      <button className="button" onClick={() => handleJoinRide(id)}>
        Join Ride
      </button>
    </div>
  );
};

export default MapRender;
