import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles, redirectPath = '/login' }) => {
  // You can check the user's role using your auth state here
  const userRole = 'customer';

  // If the user has the required role, render the passed-in element
  if (allowedRoles.includes(userRole)) {
    return <Route element={element} />;
  }

  // Otherwise, redirect the user to the specified path
  return <Navigate to={redirectPath} />;
};

export default PrivateRoute;