import React from "react";
import "../css/Home.css";
import logo from "./Logo.PNG";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Bank of React !</h1>
        <img src={logo} height="250" width="200" alt="" />
        <br />
        <br />
        <p>
          This project was created using React.js, Node.js and MySQL hosted on an Amazon Web Server as the database.
        </p>
        <p>
          This banking project has the features you would expect any bank to have such as opening closing accounts,
          tranfering funds to different accounts, depositing funds, and withdrawing funds.
        </p>
        <h3>About the Creators</h3>
        <p>
          Created by 6 students at San Jose State University, Spring 2021, CMPE 131
        </p>
        <p>
          Apoorv Pachori, Thanh Nguyen, Chafik Aziz, Stephen Oneto, Kelly Nguyen, Leonardo Blas
        </p>
      </div>
    );
  }
}
export default Home;
