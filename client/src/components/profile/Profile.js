import React from "react";
import "../../css/Profile.css";

import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TransferPage from "./TransferPage";
import DepositPage from "./DepositPage";
import AccountPage from "./AccountPage";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      pos: 0,
      username: {},
      amount: {},
    };
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Welcome, insFname insLname</h1>
          <h2>Display balance</h2>
          <Nav />
          <Switch>
            <Route path="/AccountPage" exact component={AccountPage} />
            <Route path="/TransferPage" exact component={TransferPage} />
            <Route path="/DepositPage" exact component={DepositPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Profile;
