import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Withdrawl extends React.Component {
  state = {
    balance: 0,
    amount: 0,
    num: 1,
  };

  componentDidMount() {
    if (this.props.user === "") {
      return <p>Please log in.</p>;
    } else {
      this.updateBalance();
    }
  }

  amountHandler = (e) => {
    this.setState({ amount: e.target.value });
  };

  numHandler = (e) => {
    this.setState({ num: e.target.value });
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

  onWithdrawl = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:7000/users/${this.props.user.id}`, {
        num: this.state.num,
        amount: this.state.amount * -1,
      })
      .then((res) => {
        //console.log(res);
      });
  };

  render() {
    if (this.props.user === "") {
      return <p>Please log in.</p>;
    } else {
      return (
        <div>
          <h1>Current Balance: {this.state.balance}</h1>
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
              <select id="accountType" name="account">
                <option value="checking">Checking</option>
                <option value="saving">Savings</option>
                <option value="saving">Misc</option>
              </select>
            </div>

            <div>
              <label>Date of Withdrawl: </label>
              <input type="date" name="date" required />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <Link to="/">Back</Link>
        </div>
      );
    }
  }
}
export default Withdrawl;
