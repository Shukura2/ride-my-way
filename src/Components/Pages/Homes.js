import React from "react";
import graph from "../../Images/line_graph.png";

const Homes = () => {
  return (
    <section className="home-holder">
      <div className="wrapper">
        <div className="wrapper-one">
          <h3>TOTAL NUMBER OF RIDES</h3> <br />
          <h3 className="wrap-one-dsgn">19</h3>
        </div>
        <div className="wrapper-two">
          <h3>COMMISION</h3> <br />
          <h3 className="wrap-one-dsgn">N3000</h3>
        </div>
        <div className="wrapper-three">
          <h3>TOTAL CANCELLED TRIP</h3> <br />
          <h3 className="wrap-one-dsgn">3</h3>
        </div>
      </div>

      <div className="graph-container">
        <br />
        <img src={graph} className="graph" alt="graph" />
      </div>
    </section>
  );
};
export default Homes;
