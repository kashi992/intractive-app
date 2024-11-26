import React, { useState } from "react";
import "./index.scss"; // Create this file for styling the login form

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const correctUsername = "admin";
  const correctPassword = "admin";

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === correctUsername &&
      credentials.password === correctPassword
    ) {
      setError("");
      onLogin(); // Call the parent function to update authentication state
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login Form</h2>
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