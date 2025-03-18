import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("authToken");
    const lastActiveTime = localStorage.getItem("lastActiveTime");
    const expiryDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

    if (!isAuthenticated || (lastActiveTime && new Date().getTime() - lastActiveTime > expiryDuration)) {
        // Expire session if inactive for more than 5 minutes
        localStorage.removeItem("authToken");
        localStorage.removeItem("lastActiveTime");
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
