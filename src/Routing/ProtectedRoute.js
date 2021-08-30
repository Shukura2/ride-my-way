import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../reducers/authSlice'
import { Redirect, Route, withRouter } from 'react-router-dom';


function ProtectedRoute({component: Component, ...rest}) {
  const dispatch = useDispatch();
  let isAuthenticated = false;
  const token = localStorage.getItem('user');
  if(token){
    dispatch(setCurrentUser(JSON.parse(token)));
    isAuthenticated = true;
  }
  return (
    <div>
      <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to = '/' />)}/>
    </div>
  );
}

export default withRouter(ProtectedRoute);


   