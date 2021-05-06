import React from "react";
import axios from "axios";
import "../../css/Deposit.css";

class DepositPage extends React.Component {
  state = {
    balance: 0,
    amount: 0,
    num: 1,
  };

  componentDidMount() {
    this.updateBalance();
  }
  amountHandler = (e) => {
    this.setState({ amount: e.target.value });
  };
  numHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "checking") {
      this.setState({ num: 1 });
    }
  };

  updateBalance = async () => {
    await axios
      .get(`http://localhost:7000/users/${this.props.user.id}`)
      .then((res) => {
        if (res.data[0].amount) {
          this.setState({ balance: res.data[0].amount });
        }
      });
  };

  onDeposit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:7000/users/${this.props.user.id}`, {
        num: this.state.num,
        amount: this.state.amount,
      })
      .then((res) => {
        this.updateBalance();
      });
  };

  render() {
    return (
      <div>
        <h1>Current Balance: {this.state.balance}</h1>
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
            <select id="accountType" name="account" onChange={this.numHandler}>
              <option value="null">Please select one...</option>
              <option value="checking">Checking</option>
              <option value="saving">Savings</option>
              <option value="saving">Misc</option>
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
