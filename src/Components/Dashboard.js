import React from "react";

import NavbarDashoard from "../Components/NavbarDashoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homes from "./Pages/Homes";
import Map from './Pages/Map';
// import MakeOrder  from './Components/Pages/MakeOrder';




function Dashboard() {
  return (
    <>
      <Router>
        <NavbarDashoard />
  
        <Switch>
        <Route path="/map" exact component={Map} />
          <Route path="/homes" exact component={Homes} />
          {/* <Route exact path='/makeorder' component={MakeOrder} /> */}
  
        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;
