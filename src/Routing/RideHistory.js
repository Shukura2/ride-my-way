import React, { useEffect } from "react";
import NavbarDashoard from "../Components/DashoardNavsUser";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const RideHistory = ({
  driverId,
  offerId,
  amount,
  dateTime,
  destination,
  status,
}) =>  {
  const [rideHistory, setHistory] = useState([]);

  const renderHistory = () => {
    return (
      
        rideHistory.map((rideHistoryU) => {
          return (
            
              <tr key={rideHistoryU.offerId}>
                <td className="td">{rideHistoryU.driverId}</td>
                <td className="td">{rideHistoryU.offerId}</td>
                <td className="td">{rideHistoryU.amount}</td>
                <td className="td">{rideHistoryU.dateOfTrip}</td>
                <td className="td">{rideHistoryU.destination}</td>
                <td className="td">{rideHistoryU.status}</td>
              </tr>
        
          );
    }
      
    ));
  };

  const handleHistory = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));

      const res = await axios({
        baseURL: "http://localhost:3000/v1/all-history",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res, '.....');
      
      setHistory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleHistory()
}, []);

  return (
    <div className="map-wrap">
      <NavbarDashoard />
      
      <table className="table">
        <thead>
          <tr>
            <th className="td th">DriverId</th>
            <th className="td th">OfferId</th>
            <th className="td th">Amount</th>
            <th className="td th">Date / Time</th>
            <th className="td th">Destination</th>
            <th className="td th">Status</th>
          </tr>
        </thead>

        <tbody>{renderHistory()}</tbody>
      </table>

    </div>
  );
};

export default RideHistory;
