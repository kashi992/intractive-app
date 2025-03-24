import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("authToken");
    const expiryDuration = 60 * 60 * 1000; // 5 minutes in milliseconds

    useEffect(() => {
        const updateLastActiveTime = () => {
            localStorage.setItem("lastActiveTime", new Date().getTime());
        };

        const activityEvents = [
            "mousemove",
            "mousedown",
            "click",
            "scroll",
            "keypress",
            "touchstart",
        ];

        activityEvents.forEach((event) => {
            window.addEventListener(event, updateLastActiveTime);
        });

        // Set initial time on load
        updateLastActiveTime();

        const interval = setInterval(() => {
            const lastActiveTime = localStorage.getItem("lastActiveTime");

            if (
                !lastActiveTime ||
                new Date().getTime() - lastActiveTime > expiryDuration
            ) {
                localStorage.removeItem("authToken");
                localStorage.removeItem("lastActiveTime");
                window.location.href = "/login"; // Force redirect to login
            }
        }, 1000); // Check every second

        return () => {
            clearInterval(interval);
            activityEvents.forEach((event) => {
                window.removeEventListener(event, updateLastActiveTime);
            });
        };
    }, []);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
