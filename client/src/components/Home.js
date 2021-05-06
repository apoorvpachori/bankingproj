import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/logout">
            <li>Logout</li>
          </Link>
          <Link to="/withdrawl">
            <li>Withdrawl</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Home;
