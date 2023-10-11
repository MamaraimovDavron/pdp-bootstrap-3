import React, { Component } from "react";
import Card from "./Card";

export default class Middle extends Component {
  render() {
    return (
      <div className="middle">
        <h1 className="pricing">Pricing</h1>
        <p>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>

        <div className="main-box">
          <Card />

          <div className="box">
            <span>Enterprise</span>
            <h1 className="price">
              <b>$29 </b> /mo
            </h1>

            <div className="texts">
              <h3>30 users included</h3>
              <h3>15 GB of storage</h3>
              <h3>Phone and email support</h3>
              <h3>Help center access</h3>
            </div>

            <a href="!#">Contact Us</a>
          </div>
        </div>
      </div>
    );
  }
}
