import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../css/Registration.css";

class Registration extends React.Component {
  state = { firstName: "", lastName: "", email: "", password: "" };

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
    e.preventDefault();
    console.log("submit pressed");
    const response = await fetch("http://localhost:7000/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: this.state.firstName + this.state.lastName,
        password: this.state.lastName,
        email: this.state.email,
        amount: 100,
      },
    });
    console.log(response.json());
  };

  render() {
    return (
      <div className="form-container">
        <Label className="header">Registration</Label>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="firstname"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              onChange={this.handleFirstNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Last Name</Label>
            <Input
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              onChange={this.handleLastNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={this.handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Registration;
