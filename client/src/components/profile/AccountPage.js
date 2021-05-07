import React from "react";
import axios from "axios";

class AccountPage extends React.Component {
  state = {
    openNum: null,
    closeNum: null,
    status: false,
  };
  handleChange(event) {}

  // componentDidMount() {
  //   this.updateAcc();
  // }
  // updateAcc = async () => {
  //   await axios
  //     .get(`http://localhost:7000/users/${this.props.user.id}`)
  //     .then((res) => {
  //       if (res.data[0].amount != null) {
  //         this.setState({ acc1available: true });
  //       } else if (res.data[0].amount2 != null) {
  //         this.setState({ acc2available: true });
  //       } else if (res.data[0].amount2 != null) {
  //         this.setState({ acc3available: true });
  //       }
  //     });
  // };

  openNumHandler = (e) => {
    this.setState({ status: false });

    if (e.target.value === "checking") {
      console.log("setting num to 1");
      this.setState({ openNum: 1 });
    } else if (e.target.value === "savings") {
      console.log("setting num to 2");
      this.setState({ openNum: 2 });
    } else if (e.target.value === "misc") {
      console.log("setting num to 3");
      this.setState({ openNum: 3 });
    }
  };
  closeNumHandler = (e) => {
    this.setState({ status: false });
    if (e.target.value === "checking") {
      console.log("setting num to 1");
      this.setState({ closeNum: 1 });
    } else if (e.target.value === "savings") {
      console.log("setting num to 2");
      this.setState({ closeNum: 2 });
    } else if (e.target.value === "misc") {
      console.log("setting num to 3");
      this.setState({ closeNum: 3 });
    }
  };
  onAccount = async (e) => {
    e.preventDefault();
    console.log(this.state.openNum);
    console.log(this.state.closeNum);
    if (this.state.openNum !== null) {
      console.log("opening account");
      await axios
        .post(`http://localhost:7000/open/${this.props.user.id}`, {
          num: this.state.openNum,
        })
        .then((res) => {
          console.log(res);
        });
    }
    if (this.state.closeNum !== null) {
      console.log("closing account");
      await axios
        .post(`http://localhost:7000/close/${this.props.user.id}`, {
          num: this.state.closeNum,
        })
        .then((res) => {
          console.log(res);
        });
    }
    this.setState({ status: true });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onAccount}>
          <h1>Open/Close Account Page</h1>
          <h2>Select the acounts to open: </h2>
          {/* {this.state.acc1available ? "" : this.amount1Checkbox()}
          {this.state.acc2available ? "" : this.amount2Checkbox()}
          {this.state.acc3available ? "" : this.amount3Checkbox()} */}
          <select
            id="accountType"
            name="account"
            onChange={this.openNumHandler}
          >
            <option value="null">Please select one...</option>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="misc">Misc</option>
          </select>
          <br />
          <br />
          <h3>Select the account to delete:</h3>
          {/* {this.state.acc1available ? this.amount1Checkbox() : "\n"}
          {this.state.acc2available ? this.amount2Checkbox() : "\n"}
          {this.state.acc3available ? this.amount3Checkbox() : "\n"} */}
          <select
            id="accountType"
            name="account"
            onChange={this.closeNumHandler}
          >
            <option value="null">Please select one...</option>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="misc">Misc</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>

        {this.state.status ? "Submitted" : "Not Yet Submitted"}
      </div>
    );
  }
}

export default AccountPage;

// displayAcc1 = () => {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         name="amount1"
//         checked={this.state.isChecked}
//         onChange={this.handleChange}
//       />{" "}
//       Account 1
//     </div>
//   );
// };
// displayAcc2 = () => {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         name="amount2"
//         checked={this.state.isChecked}
//         onChange={this.handleChange}
//       />{" "}
//       Account 2
//     </div>
//   );
// };
// displayAcc3 = () => {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         name="amount3"
//         checked={this.state.isChecked}
//         onChange={this.handleChange}
//       />{" "}
//       Account 3
//     </div>
//   );
// };
// amount1Checkbox = () => {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         name="amount1"
//         checked={this.state.isChecked}
//         onChange={this.handleChange}
//       />{" "}
//       Account 1
//     </div>
//   );
// };
// amount2Checkbox = () => {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         name="amount2"
//         checked={this.state.isChecked}
//         onChange={this.handleChange}
//       />{" "}
//       Account 2
//     </div>
//   );
// };
// amount3Checkbox = () => {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         name="amount3"
//         checked={this.state.isChecked}
//         onChange={this.handleChange}
//       />{" "}
//       Account 3
//     </div>
//   );
// };
