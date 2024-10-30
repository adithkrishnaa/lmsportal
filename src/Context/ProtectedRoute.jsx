// src/components/ProtectedRoute.jsx
import { useAuth } from "../Context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { currentUser } = useAuth(); // Access the current user from AuthProvider

  if (!currentUser) {
    return <Navigate to="/login" replace />; // Redirect if not authenticated
  }

  return <Outlet />; // Render protected content if authenticated
};

export default ProtectedRoute;
