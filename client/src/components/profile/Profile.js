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
          <h2>Display {this.props.user.amount}</h2>
          <Nav />
          <Switch>
            <Route path="/profile/AccountPage" component={AccountPage} />
            <Route path="/profile/TransferPage" component={TransferPage} />
            <Route path="/profile/DepositPage" component={DepositPage} />
          </Switch>
          <Link to="/">Back</Link>
        </div>
      );
    }
  }
}
export default Profile;
