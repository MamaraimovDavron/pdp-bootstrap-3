import React, { Component } from "react";

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
          <div className="box">
            <span>Free</span>
            <h1 className="price">
              <b>$0 </b> /mo
            </h1>

            <div className="texts">
              <h3>10 users included</h3>
              <h3>2 GB of storage</h3>
              <h3>Email support</h3>
              <h3>Help center access</h3>
            </div>

            <a href="!#">Sign up for free</a>
          </div>

          <div className="box">
            <span>Pro</span>
            <h1 className="price">
              <b>$15 </b> /mo
            </h1>

            <div className="texts">
              <h3>20 users included</h3>
              <h3>10 GB of storage</h3>
              <h3>Priority email support</h3>
              <h3>Help center access</h3>
            </div>

            <a href="!#">Get started</a>
          </div>

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
