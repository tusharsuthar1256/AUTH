import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../COntext/AuthContext";

const ProtectedRoute = () => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
