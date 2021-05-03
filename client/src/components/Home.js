import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/register">
            <li>Register</li>
          </Link>
          <Link to="/landingpage">
            <li>Landing Page</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Home;
