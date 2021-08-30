import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentDriver } from '../reducers/authSliceDriver'; 
import { Redirect, Route, withRouter } from 'react-router-dom';


function ProtectedRouteDriver({component: Component, ...rest}) {
  const dispatch = useDispatch();
  let isAuthenticated = false;
  const token = localStorage.getItem('driver');
  if(token){
    dispatch(setCurrentDriver(JSON.parse(token)));
    isAuthenticated = true;
  }
  return (
    <div>
      <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> :<Redirect to = '/' />)}/>
    </div>
  );
}

export default withRouter(ProtectedRouteDriver);


   