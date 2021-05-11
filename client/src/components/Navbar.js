import React from "react";
import { Link } from "react-router-dom";
import navlogo from "./logo192.png"

import "../css/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div >
        <ul id="nav" >
          <li>
          <img src={navlogo} height='50' width='50'/>
          </li>
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
