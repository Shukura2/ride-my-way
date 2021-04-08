import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
   
import Sidenav from './SideNav';
import MainDashboard from './MainDashboard';
import TodayRequest from "./TodayRequest";
// import { Route } from "react-router";


const DashbHome = () =>{
    return(
        <div>
            <Router>
                <Sidenav />
                <Switch>
                    <Route exact path ='/maindashboard' component = {MainDashboard} />
                    <Route path='/request' component = {TodayRequest} />
                </Switch>
            </Router>
            
            <MainDashboard />
            
            
        </div>
    )
}
export default DashbHome;