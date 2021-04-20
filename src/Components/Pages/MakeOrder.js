import React from "react";
import { Link } from "react-router-dom";

function MakeOrder() {
  return (
    <div className="make-order-container">
      <div className="make-order">
        <h3> Where will you like to be picked-up? </h3>
        <input
          type="text"
          placeholder="Location"
          className="location"
        /> <br /> <br />
        <h3> Where will you like to visit? </h3>
        <input type="text" placeholder="Destination" className="location" />
        <div className="make-order-btn">
          {" "}
          <Link className="mob-c">SEND</Link>
          <Link to='/home'className="mob-c">CANCEL</Link>
        </div>
      </div>
    </div>
  );
}

export default MakeOrder;
