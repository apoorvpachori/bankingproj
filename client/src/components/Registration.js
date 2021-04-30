import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../css/Registration.css";

class Registration extends React.Component {
  render() {
    return (
      <div className="form-container">
        <Label>Registration</Label>
        <Form>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="firstname"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Last Name</Label>
            <Input
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Registration;
