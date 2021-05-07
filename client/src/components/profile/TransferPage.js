import React from "react";
import axios from "axios";
class TransferPage extends React.Component {
  state = {
    transferred: false,
    checkingbalance: 0,
    savingbalance: null,
    miscbalance: null,
    amount: 0,
    fromnum: 1,
    tonum: 1,
  };

  componentDidMount() {
    console.log("in component did mount");
    this.updateBalance();
  }
  amountHandler = (e) => {
    this.setState({ amount: e.target.value });
    this.setState({ transferred: false });
  };
  fromNumHandler = (e) => {
    this.setState({ withdrew: false });

    console.log(e.target.value);
    if (e.target.value === "checking") {
      console.log("setting num to 1");
      this.setState({ fromnum: 1 });
    } else if (e.target.value === "savings") {
      console.log("setting num to 2");
      this.setState({ fromnum: 2 });
    } else if (e.target.value === "misc") {
      console.log("setting num to 3");
      this.setState({ fromnum: 3 });
    }
  };

  toNumHandler = (e) => {
    this.setState({ withdrew: false });

    console.log(e.target.value);
    if (e.target.value === "checking") {
      console.log("setting num to 1");
      this.setState({ tonum: 1 });
    } else if (e.target.value === "savings") {
      console.log("setting num to 2");
      this.setState({ tonum: 2 });
    } else if (e.target.value === "misc") {
      console.log("setting num to 3");
      this.setState({ tonum: 3 });
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

  onTransfer = async (e) => {
    e.preventDefault();
    console.log(this.state.amount);
    console.log(this.state.fromnum);
    console.log(this.state.tonum);
    let fundsAvailable = true;
    await axios
      .get(`http://localhost:7000/users/${this.props.user.id}`)
      .then((res) => {
        if (this.state.fromnum === 1) {
          if (this.state.amount > res.data[0].amount) {
            window.alert("Not enough funds available");
            fundsAvailable = false;
            return;
          }
        } else if (this.state.fromnum === 2) {
          if (this.state.amount > res.data[0].amount2) {
            window.alert("Not enough funds available");
            fundsAvailable = false;
            return;
          }
        } else if (this.state.fromnum === 3) {
          if (this.state.amount > res.data[0].amount3) {
            window.alert("Not enough funds available");
            fundsAvailable = false;
            return;
          }
        }
      });
    if (fundsAvailable) {
      await axios
        .post(`http://localhost:7000/users/${this.props.user.id}`, {
          num: this.state.tonum,
          amount: this.state.amount,
        })
        .then((res) => {
          this.updateBalance();
        });

      await axios
        .post(`http://localhost:7000/users/${this.props.user.id}`, {
          num: this.state.fromnum,
          amount: this.state.amount * -1,
        })
        .then((res) => {
          this.updateBalance();
        });
    }
  };
  render() {
    return (
      <div>
        <h1>Transfer Page</h1>
        <h3>Checking Balance: {this.state.checkingbalance ? `$${this.state.checkingbalance}`:""}</h3>
        <h3>Savings Balance: {this.state.savingbalance ? `$${this.state.savingbalance}`:""}</h3>
        <h3>Misc Balance: {this.state.miscbalance ? `$${this.state.miscbalance}`:""}</h3>
        <form onSubmit={this.onTransfer}>
          <h2>Select the account you want to transfer from: </h2>
          <label>Choose Account: </label>
          <select
            id="accountType"
            name="account"
            onChange={this.fromNumHandler}
          >
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="misc">Misc</option>
          </select>
          <br />
          <br />
          <h2>Select the account you want to transfer to: </h2>
          <label>Choose Account: </label>
          <select id="accountType" name="account" onChange={this.toNumHandler}>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="misc">Misc</option>
          </select>
          <br />
          <br />
          <div>
            <label>Enter the Amount to transfer: </label>
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
          <input type="submit" value="Transfer" />
        </form>
      </div>
    );
  }
}

export default TransferPage;
