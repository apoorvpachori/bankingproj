import React from "react";
import { Button, Form, Label } from "reactstrap";
import { Link } from "react-router-dom";

import "../css/Login.css";

class Logout extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit();
  };
  render() {
    return (
      <div className="form-container">
        <Label className="header">Login</Label>
        <Form onSubmit={this.onFormSubmit}>
          <Button>Log out</Button>
        </Form>
        <br />
        <Link to="/">Back</Link>
      </div>
    );
  }
}
export default Logout;
