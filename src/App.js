import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ride from "../src/Routing/Ride";
import Home from "./LandingPage/Home";

import LogIn from "./Routing/LogIn";

import NavbarDashoard from "./Components/NavbarDashoard";
import Map from "./Components/Pages/Map";
import MakeOrder from "./Components/Pages/MakeOrder";
import Navbar from "./DriversDashboard/Navbar";
import UserProfile from './DriversDashboard/UserProfile';
import Feedback from './DriversDashboard/Feedback'

function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/create-account" component={Ride} />

      <Route exact path="/login" component={LogIn} />

      <Route exact path="/dashboard" component={NavbarDashoard} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/make-order" component={MakeOrder} />
      <Route exact path="/drive" component={Navbar} />
      <Route exact path='/user-profile' component={UserProfile} />
      <Route exact path='/feed-back' component={Feedback} />

    </Router>
  );
}

export default App;
