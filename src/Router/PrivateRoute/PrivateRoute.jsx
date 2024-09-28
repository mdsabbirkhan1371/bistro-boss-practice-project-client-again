import React, { useContext } from 'react';
import { AuthContext } from '../../Porovider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  let location = useLocation();
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
