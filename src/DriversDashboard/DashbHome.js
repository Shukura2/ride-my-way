import React, { useState } from "react";
import UserProfile from "../DriversDashboard/UserProfile";
import mathe from "../Images/MATH8-1-1-X-1_2.png";
import DashboardNavs from "../Routing/DashboardNavs";

function DashbHome() {
  const [accept, setAccept] = useState(1841);
  const [decline, setDecline] = useState(51);
  const acceptFn = () => {
    setAccept(accept + 1);
  };
  const declineFn = () => {
    setDecline(decline + 1);
  };
  return (
    <>
    <DashboardNavs />
      <div className="home-container">
        <div className="home-child">
          <div className="idk">
            <div className="hc-member">
              <h4>TOTAL TRAFFIC</h4>
              <h1>1,254</h1>
            </div>
            <div className="hc-icon">
              {" "}
              <i className="fas fa-hand-point-up"></i>
            </div>
          </div>
          <br />

          <div className="hc-bottom">
            <i className="fas fa-arrow-up"></i>
            <p>
              {" "}
              3.25% <span>Since last month</span>
            </p>
          </div>
        </div>

        <div className="home-child">
          <div className="idk">
            <div className="hc-member">
              <h4>NEW USERS</h4>
              <h1>{accept}</h1>
            </div>
            <div className="hc-icon">
              {" "}
              <i className="fas fa-chart-pie"></i>
            </div>
          </div>
          <br />

          <div className="hc-bottom">
            <i className="fas fa-arrow-up"></i>
            <p>
              {" "}
              3.04% <span>Since last month</span>
            </p>
          </div>
        </div>

        <div className="home-child">
          <div className="idk">
            <div className="hc-member">
              <h4>CANCELLED TRIPS</h4>
              <h1>{decline}</h1>
            </div>
            <div className="hc-icon">
              {" "}
              <i className="fas fa-coins"></i>
            </div>
          </div>
          <br />

          <div className="hc-bottom">
            <i className="fas fa-arrow-up"></i>
            <p>
              {" "}
              4.01% <span>Since last month</span>
            </p>
          </div>
        </div>

        <div className="home-child">
          <div className="idk">
            <div className="hc-member">
              <h4>PERFORMANCE</h4>
              <h1>5,431</h1>
            </div>
            <div className="hc-icon">
              {" "}
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
          <br />

          <div className="hc-bottom">
            <i className="fas fa-arrow-up"></i>
            <p>
              {" "}
              4.93% <span>Since last month</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hc-banner2">
        <div className="bigger-hc">
          TRAFFIC ILLUSTRATION
          <img src={mathe} alt="t-graph" className="bhc-img" />
        </div>
        <div className="bigger-hc">
          <UserProfile rideAccept={acceptFn} rideReject={declineFn} />
        </div>
      </div>
    </>
  );
}

export default DashbHome;
