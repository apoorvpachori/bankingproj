import React from "react";
import "../css/Home.css";
import logo from "./Logo.PNG"

class Home extends React.Component {
  render() {
    return (
      <div >
        <h1>Welcome to the Bank of React !</h1>
        <img src={logo} height='250' width = '200' />
        <br/><br/>
        <p>This Banking Project was created by 6 students</p>
        <p>This project was created by coding in JavaScript and the database is MySQL </p>
        <p>add more info about the project...</p>
      </div>
    );
  }
}
export default Home;
