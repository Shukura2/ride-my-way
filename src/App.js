import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ride from "../src/Routing/Ride";
import Home from "./LandingPage/Home";
import LogIn from "./Routing/LogIn";
import Homes from './Components/Pages/Homes';
import DriverSignup from "./Routing/DriverSignup";
import DriveLogIn from "./Routing/DriverLogin";
import UserProfile from './DriversDashboard/UserProfile';
import {toast} from 'react-toastify'
import ProtectedRoute from "./Routing/ProtectedRoute";
import RideHistory from "./Routing/RideHistory";
// import CreateOfferNav from "./Routing/CreateOfferNav";
import MyOffers from "./Routing/MyOffers";
import Map from "./Components/Pages/Map";
import DashbHome from "./DriversDashboard/DashbHome";
import CreateOffer from "./Routing/CreateOffer";

toast.configure()
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create-account" component={Ride} />
      <Route exact path="/login" component={LogIn} />
      <ProtectedRoute exact path="/user-dashboard" component={Map} />
      <Route exact path="/my-dashboard" component={Homes} />

      <Route exact path="/driver-signup" component={DriverSignup} />
      <Route exact path="/driver-login" component={DriveLogIn} />
      <Route exact path="/dashboard-driver" component={DashbHome} />
      <Route exact path="/my-offers" component={MyOffers} />
      <Route exact path='/user-profile' component={UserProfile} />
      <ProtectedRoute exact path="/ride-history" component={RideHistory}/>
      <Route exact path="/create-offer" component={CreateOffer}/>

            
    </Router>
  );
}

export default App;
