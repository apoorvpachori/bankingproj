import React from "react";
import axios from "axios";
import "../../css/Deposit.css";

class DepositPage extends React.Component {
  state = {
    amount: 0,
    num: 1,
  };

  amountHandler = (e) => {
    this.setState({ amount: e.target.value });
  };
  numHandler = (e) => {
    this.setState({ num: e.target.value });
  };
  onDeposit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:7000/users/${this.props.user.id}`, {
        num: this.state.num,
        amount: this.state.amount,
      })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <h1>Current Balance: {this.props.user.amount}</h1>
        <form className="my-form" onSubmit={this.onDeposit}>
          <label>Please upload the front of the check: </label>
          <input type="file" required />
          {/* <img id="myImg" src="#" alt="Image of Check" /> */}
          <div>
            <label>Amount: </label>
            <input
              type="number"
              name="amount"
              id="currency-field"
              min="0"
              placeholder="0000.00"
              required
              onChange={this.amountHandler}
            />
          </div>

          <div>
            <label>Choose Account: </label>
            <select id="accountType" name="account">
              <option value="checking">Account 1</option>
              <option value="saving">Account 2</option>
              <option value="saving">Account 3</option>
            </select>
          </div>

          <div>
            <label>Date of Deposit: </label>
            <input type="date" name="date" required />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default DepositPage;
