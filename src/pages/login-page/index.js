import React, { useState, useEffect } from "react";
import "./index.css"; // Create this file for styling the login form
import { useNavigate } from "react-router-dom";
const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const correctAdminUsername = "admin";
  const correctAdminPassword = "admin";
  const correctUsername = "cpbugljv";
  const correctPassword = "rs9";
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === correctUsername &&
      credentials.password === correctPassword
    ) {
      setError("");
      localStorage.setItem("authToken", "loggedin"); // Store login state
      localStorage.setItem("lastActiveTime", new Date().getTime()); // Store last active time
      // onLogin(); // Call the parent function to update authentication state
      navigate('/home');
    }
    else if (credentials.username === correctAdminUsername && credentials.password === correctAdminPassword) {
      localStorage.setItem("authToken", "adminToken");
      navigate("/dashboard");  // Redirect to dashboard
    }

    else {
      setError("Invalid username or password!");
    }
  };

  // Function to update last active time
  const updateLastActiveTime = () => {
    if (localStorage.getItem("authToken")) {
      localStorage.setItem("lastActiveTime", new Date().getTime());
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateLastActiveTime);
    document.addEventListener("keydown", updateLastActiveTime);

    return () => {
      document.removeEventListener("mousemove", updateLastActiveTime);
      document.removeEventListener("keydown", updateLastActiveTime);
    };
  }, []);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>admin Login Form</h2>
        <p>We believe in delivering Everyday Extraordinary - a solution that brings the 'extra' and improves the lives of everyday people - every single day.</p>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;