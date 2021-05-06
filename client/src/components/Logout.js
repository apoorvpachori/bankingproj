import React from "react";
import { Form, Label } from "reactstrap";
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
        <Label className="header">Logout</Label>
        <Form onSubmit={this.onFormSubmit}>
          <input type="submit" value="Logout" />
        </Form>
        <br />
        <Link to="/">Back</Link>
      </div>
    );
  }
}
export default Logout;
