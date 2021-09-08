import axios from "axios";
import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AcceptRejectRideRender = ({ fullName, historyId, status }) => {
  const [disable, setDisable] = useState(false);
  const [display, setDisplay] = useState(true)

  const handleAcceptRide = async () => {
    setDisable(true);
    try {
      const token = JSON.parse(localStorage.getItem("driver"));
      const res = await axios.put(
        `http://localhost:3000/v1/accept-offer/${historyId}`
      );
      // const notify = () => toast('You have accepted this ride offer');
      // notify();
      
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleRejectRide = async () => {
    setDisplay(false)
    try {
      const token = JSON.parse(localStorage.getItem("driver"));
      const res = await axios.put(
        `http://localhost:3000/v1/reject-offer/${historyId}`
      ); 
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={`${display ? "accept-reject" : "display-none"}`} >
      <h3>{fullName}</h3>
      <p>wants to join ride</p>
      <div className="conture">
        <button
          className={`color-grn btn-offer ${disable ? "disable-button" : ""}`}
          onClick={handleAcceptRide}
          disabled={disable}
        >
          Accept
        </button>
        <button className="color-red btn-offer" onClick={handleRejectRide} >
          Reject
        </button>
      </div>
    </div>
  );
};

export default AcceptRejectRideRender;
