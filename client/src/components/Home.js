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
        <p>This project was created using React.js and Node.js and the MySQL as a database. </p>
        <p>This BankingProject is an Online ATM</p> 
        <p>It is used to create an online bank account, to deposit a check or a money order, and to transfer funds from one account to the other </p>
        <br/><br/>
        <h5>About Creators</h5>  
        <p>This Banking Project was created by 6 students at the univeristy of SJSU</p> 
        <p>Apoorv Pachori: Software Developer</p> 
        <p>Thanh Nguyen: Software Engineer</p> 
        <p>Chafik Aziz: Systems Engineer</p>
        <p>Stephen Oneto: Sofwtare Engineer</p> 
        <p> Kelly Nguyen: Software Engineer</p>
        <p> Leonardo Blas: Software Engineer </p>
      </div>
    );
  }
}
export default Home;
