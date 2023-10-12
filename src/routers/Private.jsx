// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { UseContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Private = ({children}) => {

  const {userData, loader} = useContext(UseContext);
  const location = useLocation()

  //loading
  if(loader){
    return <p>loading.....</p>
  }

  // user data
  if(userData){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;