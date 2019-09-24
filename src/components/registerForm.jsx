import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { register } from "../services/userService";
import auth from "../services/authService";

class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(5)
      .label("Password"),
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name")
  };
  doSubmit = async () => {
    try {
      const jwt = await register(this.state.data);
      auth.loginWithJwt(jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
