import React from "react";
import { Link } from "react-router-dom";
import "../component-styles/Both.css";
function Login() {
  return (
    <div className="container">
      <div className = "form-container">
      <h2>Log in</h2>

      <p>
        Username:{" "}
        <input type="email" className="userName" placeholder="Enteryour Email" required />
      </p>

      <p>
        Password:{" "}
        <input
          type="password"
          className="password"
          placeholder="Enter your Password"
          required
        />
      </p>

      <button>Submit</button>

      <p>
        Don’t have an account?{" "}
        {/* ✅ Correct link */}
        <Link to="/signup">Sign up</Link>
      </p>
      </div>
    </div>
  );
}

export default Login;
