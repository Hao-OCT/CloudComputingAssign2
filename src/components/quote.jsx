import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getQuote } from "../services/quoteService";

class Quote extends Form {
  state = {
    data: {
      origin: "",
      destination: "",
      outbound: "",
      currency: "",
      inbound: ""
    },
    errors: {}
  };
  schema = {
    origin: Joi.string()
      .required()
      .label("Origin"),
    destination: Joi.string()
      .required()
      .label("Destination"),
    outbound: Joi.string()
      .required()
      .label("Outbound"),
    currency: Joi.string()
      .required()
      .label("Currency"),
    inbound: Joi.string().label("Inbound")
  };
  doSubmit = async () => {
    const { data } = this.state;
    await getQuote(data);
  };

  render() {
    return (
      <div className="container">
        <h1>Where to next</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("origin", "Origin")}
          {this.renderInput("destination", "Destination")}
          {this.renderInput("currency", "Currency")}
          {this.renderInput("outbound", "Outbound date", "date")}
          {this.renderInput("inbound", "Inbound date", "date")}
          {this.renderButton("Click")}
          <input type="text" id="input1" />
        </form>
      </div>
    );
  }
}

export default Quote;
