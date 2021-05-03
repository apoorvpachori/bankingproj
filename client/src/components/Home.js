import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    console.log(this.props);
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
        </ul>
      </div>
    );
  }
}

export default Home;
