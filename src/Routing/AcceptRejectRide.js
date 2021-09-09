import React, { useEffect, useState } from "react";
import DashboardNavs from "./DashboardNavs";
import AcceptRejectRideRender from "./AcceptRejectRideRender";
import axios from "axios";

const AcceptRejectRide = () => {
  const [viewUserName, setviewUserName] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/v1/accept-reject-offer"
        );
        setviewUserName(res.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    getData();
  }, []);

  return (
    <div className="map-wrap">
      <DashboardNavs />
      <div className="cont">
        {viewUserName.map((views, i) => {
          return (
            <AcceptRejectRideRender
              fullName={views.fullName}
              historyId={views.historyId}
              status={views.status}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AcceptRejectRide;
