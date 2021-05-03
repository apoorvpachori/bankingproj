import React from "react";

import AccBtn from "./AccBtn";
import TransferBtn from "./TransferBtn";
import DepositBtn from "./DepositBtn";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { user: "" };
    //Binding functions inside the constructor
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    /*this.componentDidMount = this.componentDidMount.bind(this)*/
  }
  //Handle Clicks
  handleClick1() {
    this.setState({ pos: 1 });
    console.log("Open/Close Account was clicked");
  }
  handleClick2() {
    this.setState({ pos: 2 });
    console.log("Transfer Funds was clicked");
  }
  handleClick3() {
    this.setState({ pos: 3 });
    console.log("Deposit Via Check was clicked");
  }

  componentDidMount() {
    if (this.props.user !== "") {
      this.setState({ user: this.props.user });
      console.log(this.state.user.username);
    }
  }

  render() {
    if (this.state.user === "") {
      return <p>Please log in</p>;
    } else {
      return (
        <div>
          <h1>Welcome, {this.state.user.username} </h1>
          <h2>Balance {this.state.user.amount}</h2>
          <AccBtn handleClick1={this.handleClick1} data={this.state} />
          <TransferBtn handleClick1={this.handleClick2} data={this.state} />
          <DepositBtn handleClick1={this.handleClick3} data={this.state} />
        </div>
      );
    }
  }
}
export default Profile;
