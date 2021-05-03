import React from "react";
import Registration from "./Registration";
import Profile from "../components/profile/Profile";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Registration} />
            <Route path="/landingpage" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
