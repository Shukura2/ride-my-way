import React from "react";
import toyota from "../../Images/SE_-_2020_Toyota_Camry.png";
import { Link } from "react-router-dom";
import cartoon from "../../Images/download-2.jpg";
import { FaStar } from "react-icons/fa";

function Map() {
  return (
    <div className="map-wrap">
      <div className="flex-container-parent">
        <div className="flex-container-info">
          <img src={toyota} className="flex-c-img" alt="toyota" />
          <h4>AGL 666 DN</h4>

          <hr />

          <div className="flex-c-users">
            <div className="fcu-img">
              <img src={cartoon} className="cartoon" alt="cartoon" />
            </div>
            <div>
              <h3>Iskilu Rasheed</h3>
            </div>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <Link to="/make-order" className="button">
            Make Order
          </Link>
        </div>

        <div className="flex-container-info">
          <img src={toyota} className="flex-c-img" alt="toyota" />
          <h4>JJJ 01 DNA</h4>

          <hr />

          <div className="flex-c-users">
            <div className="fcu-img">
              <img src={cartoon} className="cartoon" alt="cartoon" />{" "}
            </div>
            <div>
              <h3>Ola Shehu</h3>
            </div>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <Link to="/make-order" className="button">
            Make Order
          </Link>
        </div>
        <div className="flex-container-info">
          <img src={toyota} className="flex-c-img" alt="toyota" />
          <h4>MUS 60 DNA</h4>

          <hr />

          <div className="flex-c-users">
            <div className="fcu-img">
              {" "}
              <img src={cartoon} className="cartoon" alt="cartoon" />
            </div>
            <div>
              <h3>Paul Anu</h3>
            </div>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <Link to="/make-order" className="button">
            Make Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Map;
