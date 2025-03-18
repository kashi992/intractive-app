import React, {useEffect} from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("authToken");
    const expiryDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

    useEffect(() => {
        const interval = setInterval(() => {
            const lastActiveTime = localStorage.getItem("lastActiveTime");

            if (!lastActiveTime || new Date().getTime() - lastActiveTime > expiryDuration) {
                localStorage.removeItem("authToken");
                localStorage.removeItem("lastActiveTime");
                window.location.href = "/login"; // Force redirect to login
            }
        }, 1000); // Check every second

        return () => clearInterval(interval);
    }, []);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }


    return <Outlet />;
};

export default ProtectedRoute;
