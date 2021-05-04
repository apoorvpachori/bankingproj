import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

import "../css/Login.css";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    status: "",
    user: null,
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password);
  };
  render() {
    return (
      <div className="form-container">
        <Label className="header">Login</Label>
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={this.handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
          </FormGroup>
          <input type="submit" value="Submit" />
        </Form>

        <Label>
          {this.state.user === null ? "User not logged in" : "User Logged in"}
        </Label>
        <br />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Login;
