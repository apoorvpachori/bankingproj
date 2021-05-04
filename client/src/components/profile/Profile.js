import React from "react";
import Nav from "./Nav";
import { Switch, Route, Link } from "react-router-dom";
import TransferPage from "./TransferPage";
import DepositPage from "./DepositPage";
import AccountPage from "./AccountPage";
import "../../css/Profile.css";

class Profile extends React.Component {
  render() {
    if (this.props.user === "") {
      return <p>Please log in.</p>;
    } else {
      return (
        <div>
          <h1>Welcome, {this.props.user.username}</h1>
          <h2>Account Balance: ${this.props.user.amount}</h2>
          <Nav />
          <Switch>
            <Route path="/profile/AccountPage">
              <AccountPage user={this.props.user} />
            </Route>
            <Route path="/profile/TransferPage">
              <TransferPage user={this.props.user} />
            </Route>
            <Route path="/profile/DepositPage">
              <DepositPage user={this.props.user} />
            </Route>
          </Switch>
          <Link to="/">Back</Link>
        </div>
      );
    }
  }
}
export default Profile;
