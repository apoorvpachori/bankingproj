import React from "react";
import Registration from "./Registration";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "../components/profile/Profile";
import Home from "./Home";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Label } from "reactstrap";

class App extends React.Component {
  state = { user: "" };
  onLogin = async (email, password) => {
    await axios
      .post("http://localhost:7000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        this.setState({ user: res.data[0] });
        console.log(JSON.stringify(res.data[0]));
        localStorage.setItem("user", JSON.stringify(res.data[0]));
      });
  };

  onLogout = () => {
    localStorage.clear();
    this.setState({ user: "" });
  };

  componentDidMount() {
    this.setState({ user: JSON.parse(localStorage.getItem("user")) });
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home user={this.state.user} />
            </Route>
            <Route path="/register" component={Registration} />
            <Route path="/profile">
              <Profile user={this.state.user} />
            </Route>
            <Route path="/login">
              <Login onSubmit={this.onLogin} />
            </Route>
            <Route path="/logout">
              <Logout onSubmit={this.onLogout} />
            </Route>
          </Switch>
          <Label>{this.state.user.username}</Label>
        </Router>
      </div>
    );
  }
}
export default App;
