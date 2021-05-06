import axios from "axios";
import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "../css/Login.css";

class Registration extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    status: false,
  };

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmitHandler = async (e) => {
    console.log(this.state.firstName + " " + this.state.lastName);
    console.log(this.state.password);
    console.log(this.state.email);
    e.preventDefault();
    console.log("submit pressed");
    axios
      .post("http://localhost:7000/users", {
        username: this.state.firstName + " " + this.state.lastName,
        password: this.state.password,
        email: this.state.email,
      })
      .then((res) => {
        console.log(res);
        this.setState({ status: true });
        if (res.data === "") {
          this.setState({ status: false });
        }
      });
  };
  render() {
    return (
      <>
        <div class="rounded_corners_textbox">
        <p className="header">Registration</p>
          <Form onSubmit={this.onSubmitHandler}>
            <FormGroup>
              {/*<Label for="firstName">First Name</Label>*/}
              <Input
                type="firstname"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                onChange={this.handleFirstNameChange}
              />
            </FormGroup>
            <FormGroup>
              {/*<Label for="exampleEmail">Last Name</Label>*/}
              <Input
                type="lastname"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                onChange={this.handleLastNameChange}
              />
            </FormGroup>
            <FormGroup>
              {/*<Label for="exampleEmail">Email</Label>*/}
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                onChange={this.handleEmailChange}
              />
            </FormGroup>
            <FormGroup>
              {/*<Label for="examplePassword">Password</Label>*/}
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                onChange={this.handlePasswordChange}
              />
            </FormGroup>
            <input type="submit" value="Register" />
          </Form>

          <Label>
            {this.state.status ? "Registered" : " Not Yet Registered"}
          </Label>
          <br />
          <Link to="/">Back</Link>
        </div>
      </>
    );
  }
}

export default Registration;
