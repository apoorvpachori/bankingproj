import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
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
      <div className="rounded_corners_textbox">
        <p className="header">Welcome back!</p>
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={this.handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
          </FormGroup>
          <input type="submit" value="Sign in" />
        </Form>
        <br />
        <Link to="/register">
          <button className="button button0">Register</button>
        </Link>
        <Link to="/" className="back">
          Back
        </Link>
      </div>
    );
  }
}

export default Login;
