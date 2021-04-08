import logo from './logo.svg';
import './App.css';
import Navbar from './LandingPage/Navbar';
import BannerOne from './LandingPage/BannerOne';
import BannerTwo from './LandingPage/BannerTwo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Ride from '../src/Routing/Ride';
import Home from "./LandingPage/Home";
import MakeReservation from './Routing/MakeReservation';
import LogIn from './Routing/LogIn';
import RideOffers from './Routing/RideOffers';
import DashbHome from './Dashboard/DashbHome';
import SideNav from './Dashboard/SideNav';
import TodayRequest from './Dashboard/TodayRequest';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path='/ride' component={Ride} />
      <Route exact path='/makereservation' component={MakeReservation} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/rideoffers' component={RideOffers} />
      <Route exact path="/dashboard" component={DashbHome} />
      
    </Router>
  );
}

export default App;
