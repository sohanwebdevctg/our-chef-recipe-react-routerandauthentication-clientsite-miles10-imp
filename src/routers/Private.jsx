// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { UseContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';

// eslint-disable-next-line react/prop-types
const Private = ({children}) => {

  const {userData, loader} = useContext(UseContext);
  const location = useLocation()

  //loading
  if(loader){
    return <Loading></Loading>
  }

  // user data
  if(userData){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;