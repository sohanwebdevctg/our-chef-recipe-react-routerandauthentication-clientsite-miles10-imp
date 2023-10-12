// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { UseContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Private = ({children}) => {

  const {userData, loader} = useContext(UseContext);
  if(loader){
    return <p>loader...</p>
  }

  if(userData){
    return children
  }
  return <Navigate to="/login"></Navigate>
};

export default Private;