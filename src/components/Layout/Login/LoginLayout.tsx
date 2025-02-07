import React from "react";
import "./Login.css"; // Import CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Enter your username" />

          <input type="password" placeholder="Enter your password" />

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button type="submit">Login</button>
        </form>
        <p>
          Not a Member? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
