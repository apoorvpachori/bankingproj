import React from "react"

import AccBtn from "./AccBtn"
import TransferBtn from "./TransferBtn"
import DepositBtn from "./DepositBtn"

class LandingPage extends React.Component  {
  constructor(){
    super()
    this.state = {
      pos: 0,
      username: {},
      amount: {},
    }
    //Binding functions inside the constructor
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    /*this.componentDidMount = this.componentDidMount.bind(this)*/
  }
  //Handle Clicks
  handleClick1(){
    this.setState({pos:1})
    console.log("Open/Close Account was clicked")
  }
  handleClick2() {
    this.setState({pos:2})
    console.log("Transfer Funds was clicked")
  }
   handleClick3() {
    this.setState({pos:3})
    console.log("Deposit Via Check was clicked")
  }
  
  componentDidMount(){
    fetch("http://localhost:7000/users/1", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then( (data) =>{
      console.log(data)
    })
  }

  render(){
    return(
      <div>
      {/*
      <Header
      loading = {this.state.loading}
      data ={this.state} 
      />
      ***Need to learn about react router***
      */}
      
      <h1>Welcome, insFname insLname</h1>
      <h2>Display balance</h2>
      <AccBtn 
        handleClick1 = {this.handleClick1}
        data = {this.state}
      />
      <TransferBtn
        handleClick1 = {this.handleClick2}
        data = {this.state} 
      />
      <DepositBtn
        handleClick1 = {this.handleClick3}
        data = {this.state} 
      />
      </div>
    )
  }
}
export default LandingPage;