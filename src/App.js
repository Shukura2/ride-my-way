import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ride from "../src/Routing/Ride";
import Home from "./LandingPage/Home";
import MakeReservation from "./Routing/MakeReservation";
import LogIn from "./Routing/LogIn";
import RideOffers from "./Routing/RideOffers";
import NavbarDashoard from './Components/NavbarDashoard'
import Map from './Components/Pages/Map'
import MakeOrder from './Components/Pages/MakeOrder'




function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/createaccount" component={Ride} />
      <Route exact path="/makereservation" component={MakeReservation} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/rideoffers" component={RideOffers} />
      <Route exact path="/dashboard" component={NavbarDashoard} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/makeorder" component={MakeOrder} />



      

      
    </Router>
  );
}

export default App;
