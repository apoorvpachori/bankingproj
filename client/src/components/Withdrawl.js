import React from "react";
import axios from "axios";
import "../css/Withdraw.css";

class Withdrawl extends React.Component {
  state = {
    withdrew: false,
    checkingbalance: 0,
    savingbalance: 0,
    miscbalance: 0,
    amount: 0,
    num: 1,
  };

  componentDidMount() {
    this.updateBalance();
    this.setState({ withdrew: false });
  }
  amountHandler = (e) => {
    this.setState({ amount: e.target.value });
    this.setState({ withdrew: false });
  };
  numHandler = (e) => {
    this.setState({ withdrew: false });

    if (e.target.value === "checking") {
      console.log("setting num to 1");
      this.setState({ num: 1 });
    } else if (e.target.value === "savings") {
      console.log("setting num to 2");
      this.setState({ num: 2 });
    } else if (e.target.value === "misc") {
      console.log("setting num to 3");
      this.setState({ num: 3 });
    }
  };

  updateBalance = async () => {
    await axios
      .get(`http://localhost:7000/users/${this.props.user.id}`)
      .then((res) => {
        if (res.data[0].amount !== null) {
          this.setState({ checkingbalance: res.data[0].amount });
        }
        if (res.data[0].amount2 !== null) {
          this.setState({ savingbalance: res.data[0].amount2 });
        }
        if (res.data[0].amount3 !== null) {
          this.setState({ miscbalance: res.data[0].amount3 });
        }
      });
  };

  onWithdrawl = async (e) => {
    e.preventDefault();
    console.log(this.state.num);
    console.log(this.state.amount);
    await axios
      .post(`http://localhost:7000/users/${this.props.user.id}`, {
        num: this.state.num,
        amount: this.state.amount * -1,
      })
      .then((res) => {
        this.updateBalance();
        this.setState({ withdrew: true });
      });
  };

  render() {
    return (
      <div className="withdraw">
        <h3>Checking Balance: {this.state.checkingbalance}</h3>
        <h3>Savings Balance: {this.state.savingbalance}</h3>
        <h3>Misc Balance: {this.state.miscbalance}</h3>
        <form className="my-form" onSubmit={this.onWithdrawl}>
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
              <option value="savings">Savings</option>
              <option value="misc">Misc</option>
            </select>
          </div>

          <div>
            <label>Date of Withdrawl: </label>
            <input type="date" name="date" required />
          </div>
          <input type="submit" value="Withdraw" />
        </form>
        {this.state.withdrew ? "Withdrew!" : "Not Yet Withdrawn"}
      </div>
    );
  }
}
export default Withdrawl;
