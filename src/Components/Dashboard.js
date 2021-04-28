import React from "react";
import NavbarDashoard from "../Components/NavbarDashoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homes from "./Pages/Homes";
import Map from './Pages/Map';





function Dashboard() {
  return (
    <>
      <Router>
        <NavbarDashoard />
  
        <Switch>
        <Route path="/map" exact component={Map} />
          <Route path="/homes" exact component={Homes} />
          
  
        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;
