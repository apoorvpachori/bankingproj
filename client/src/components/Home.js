import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

class Home extends React.Component {
  render() {
    return (
      <div className="rounded_corners_textbox">
        <Link to="/login">Log in</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br />
        <Link to="/logout">Log out</Link>
        <br />
        <Link to="/withdrawl">
          <button className="button button0">ATM</button>
        </Link>
      </div>
    );
  }
}
export default Home;
