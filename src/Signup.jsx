import React from "react";
import { Link } from "react-router-dom";
import "../component-styles/Both.css"
function Signup() {
  return (
    <div className="container">
      <div className = "form-container">
      <h2>Sign up</h2>
      <p>
        Enter your name:{" "}
        <input type="text" className="name" placeholder="Enter your Name" required />
      </p>
      <p>
        Username:{" "}
        <input type="email" className="userName" placeholder="Enter your Gmail" required />
      </p>  
      <p>
        Password:{" "}
        <input
          type="password"
          className="password"
          placeholder="Enter your password"
          required
        />
      </p>
      <button>Submit</button>

      <p>
        Already have an account?{" "}
        {/* ✅ Correct link */}
        <Link to="/login">Log in</Link>
      </p>
      </div>
    </div>
  );
}

export default Signup;
