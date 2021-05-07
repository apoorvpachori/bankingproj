import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout">Log out</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
