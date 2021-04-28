import React from "react";
import shuku from "../Images/IMG-20201211-WA0000.jpg";

function UserProfile({rideAccept, rideReject}) {
  return (
    <>
      <div className="banner-up">
        <div className="container-img-div">
          <img src={shuku} className="img-div" alt="userimg" />
        </div>
        <br /> 
        <p>Name: Shukurah</p>
        <p>PickUp: Isolo</p>
        <p>Destination: Ikeja</p>
        <p>Ride fare: N300</p>
        <br />
        <button className="color-grn" onClick={rideAccept}>
          ACCEPT
        </button>
        <button className="color-red" onClick={rideReject}>
          DECLINE
        </button>
      </div>
    </>
  );
}

export default UserProfile;
