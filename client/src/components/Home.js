import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

class Home extends React.Component {
  render() {
    return (
      <div class="rounded_corners_textbox">
        <a href="/login">Log in</a>
        <br />
        <a href="/register">Register</a>
        <br />
        <a href="/profile">Profile</a>
        <br />
        <a href="/logout">Log out</a>
        <br />
        <a href="/withdrawl"><button class="button button0">ATM</button></a>
      </div>
    );
  }
}
export default Home;