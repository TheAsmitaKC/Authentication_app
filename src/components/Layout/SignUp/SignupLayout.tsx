import React from "react";
import "./Signup.css"; // Import CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <div className="name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Sign Up</button>

          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
