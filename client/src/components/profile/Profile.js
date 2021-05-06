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
        <>
          <div class="rounded_corners_textbox1">
            <p className="header">Welcome to your dashboard, <br /> {this.props.user.username}</p>
            <a href="/profile/AccountPage"><button class="button button0">Manage your accounts</button></a>
            <br /><br />
            <a href="/profile/TransferPage"><button class="button button0">Transfer funds</button></a>
            <br /><br />
            <a href="/profile/DepositPage"><button class="button button0">Deposit checks</button></a>
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
        </>
      );
    }
  }
}
export default Profile;
