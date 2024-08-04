import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from '../../COntext/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser ,  login , currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    try {
      login(email, password);
      console.log("User logged in successfully");
      
      setCurrentUser(true); // Update current user
      navigate("/");
      // console.log("After value of current user", currentUser);
      
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
