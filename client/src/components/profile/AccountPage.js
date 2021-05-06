import React from "react";
import axios from "axios";

class AccountPage extends React.Component {
  constructor() {
    super();
    this.state = {
      acc1available: false,
      acc2available: false,
      acc3availble: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
  }

  componentDidMount() {
    this.updateAcc()
  }
  updateAcc = async () => {
    await axios
      .get(`http://localhost:7000/users/${this.props.user.id}`)
      .then((res) => {
        if (res.data[0].amount != null) {
          this.setState({ acc1available: true });
        } else if (res.data[0].amount2 != null) {
          this.setState({ acc2available: true });
        } else if (res.data[0].amount2 != null) {
          this.setState({ acc3available: true });
        }
      });
  };
  displayAcc1 = () =>{
    return (
      <div>
        <input
          type="checkbox"
          name="amount1"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        /> Account 1
      </div>
    );
  }
  displayAcc2 = () =>{
    return (
      <div>
        <input
          type="checkbox"
          name="amount2"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        /> Account 2
      </div>
    );
  }
  displayAcc3 = () =>{
    return (
      <div>
        <input
          type="checkbox"
          name="amount3"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        /> Account 3
      </div>
    );
  }
  amount1Checkbox = () => {
    return (
      <div>
        <input
          type="checkbox"
          name="amount1"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        /> Account 1
      </div>
    );
  };
  amount2Checkbox = () => {
    return (
      <div>
        <input
          type="checkbox"
          name="amount2"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        /> Account 2
      </div>
    );
  };
  amount3Checkbox = () => {
    return (
      <div>
        <input
          type="checkbox"
          name="amount3"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        /> Account 3
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Open/Close Account Page</h1>
        <h2>Availavble acounts to open: </h2>
          {this.state.acc1available ? "" : this.amount1Checkbox()}
          {this.state.acc2available ? "" : this.amount2Checkbox()}
          {this.state.acc3available ? "" : this.amount3Checkbox()}
          <button>Open Selected Account</button>
        <br/><br/>
        <h3>If you want to delete an account, check the account and delete:</h3>
          {this.state.acc1available ? this.amount1Checkbox() : "\n"}
          {this.state.acc2available ? this.amount2Checkbox() : "\n"}
          {this.state.acc3available ? this.amount3Checkbox() : "\n"}
          <button>Delete Account Selected</button>
      </div>
    );
  }
}

export default AccountPage;
