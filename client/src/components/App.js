import React from "react";
import Registration from "./Registration";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "../components/profile/Profile";
import Home from "./Home";
import Withdrawl from "./Withdrawl";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Label } from "reactstrap";
import "../css/Login.css";

class App extends React.Component {
  state = {
    user: "",
  };

  onLogin = async (email, password) => {
    await axios
      .post("http://localhost:7000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data === "Couldnt log in") {
          window.alert("Couldn't log in");
        } else {
          this.setState({ user: res.data[0] });
          localStorage.setItem("user", JSON.stringify(res.data[0]));
          <Redirect to="/" />;
        }
      });
  };

  onLogout = () => {
    localStorage.clear();
    this.setState({ user: "" });
  };

  componentDidMount() {
    if (localStorage.getItem("user") !== null) {
      this.setState({ user: JSON.parse(localStorage.getItem("user")) });
    }
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
            <Route path="/withdrawl">
              <Withdrawl user={this.state.user} />
            </Route>
          </Switch>
          <Label className="userStatus">
            {this.state.user === ""
              ? `Please Log in`
              : `User Currently Logged in: ${this.state.user.username}`}
          </Label>
        </Router>
      </div>
    );
  }
}
export default App;
