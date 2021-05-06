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
<<<<<<< HEAD
=======
          <h2>Account Balance: ${this.props.user.amount}</h2>
>>>>>>> 36b56c46e5f315a633b4a918a2aa58f838f8141b
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
