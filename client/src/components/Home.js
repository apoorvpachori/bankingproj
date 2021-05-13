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
        <br></br>
        <p><i><b>Apoorv Pachori: Software Developer</b></i></p> 
        <p><i><b>Thanh Nguyen: Software Engineer</b></i></p> 
        <p><i><b>Chafik Aziz: Systems Engineer</b></i></p>
        <p><i><b>Stephen Oneto: Sofwtare Engineer</b></i></p> 
        <p><i><b>Kelly Nguyen: Software Engineer</b></i></p>
        <p><i><b>Leonardo Blas: Software Engineer</b></i></p>
      </div>
    );
  }
}
export default Home;
