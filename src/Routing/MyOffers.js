import axios from "axios";
import React, { useState, useEffect } from "react";
import DashboardNavs from "./DashboardNavs";
import { toast } from "react-toastify";
import RenderMyOffer from "./RenderMyOffer";
import { setOffers } from "../reducers/OfferSlice";
import { useSelector, useDispatch } from "react-redux";

function MyOffers() {
  const offer = useSelector((state) => state.offers.offerData);
  console.log(offer);
  const dispatch = useDispatch();
  const [edit, setedit] = useState(false);
  const getOffer = async () => {
    try {
      const res = await axios.get("http://localhost:3000/v1/offers");
      dispatch(setOffers({ offerData: res.data }));
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getOffer();
  }, []);

  const deletOffer = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("driver"));

      const res = await axios({
        baseURL: `http://localhost:3000/v1/offer/${id}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const remaining = offer.filter((offers) => offers.id !== id);
      dispatch(setOffers({ offerData: remaining }));

      const notify = () => toast(res.data.message);
      notify();
    } catch (error) {
      console.log(error.response);
    }
  };

  const editOffer = async (id, editDetail) => {
    try {
      const token = JSON.parse(localStorage.getItem("driver"));
      const res = await axios.put(
        `http://localhost:3000/v1/offer/${id}`,
        editDetail,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: editDetail,
        }
      );
      const notify = () => toast(res.data.message);
      notify();
    } catch (error) {
      console(error.response);
    }
  };
  return (
    <div>
      <DashboardNavs />
      <div>
        {offer.map((item, index) => {
          return (
            <RenderMyOffer
              amount={item.amount} 
              destination={item.destination}
              id={item.id}
              key={index}
              deletOffer={deletOffer}
              editOffer={editOffer}
              edit={edit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyOffers;
