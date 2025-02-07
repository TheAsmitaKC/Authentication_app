import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css"; // Import CSS file

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation for passwords
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Assuming you have a backend API to handle sending the verification code
    const response = await fetch("/api/send-verification-code", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setMessage("Verification code has been sent to your email!");
      // Redirect to the verification page after signup
      history.push("/verify");
    } else {
      setMessage("Error sending verification code.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="name-fields">
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>

          {message && <p className="message">{message}</p>}

          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
