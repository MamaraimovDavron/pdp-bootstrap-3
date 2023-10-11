import React, { Component } from "react";

const card1 = [
  "10 users included",
  "2 GB of storage",
  "Email support",
  "Help center access",
];

const card2 = [
  "20 users included",
  "10 GB of storage",
  "Priority email support",
  "Help center access",
];

const card3 = [
  "30 users included",
  "15 GB of storage",
  "Phone and email support",
  "Help center access",
];

export default class Middle extends Component {
  render(props) {
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
              <b>$ 0</b> /mo
            </h1>

            <ul className="texts">
              {card1.map((item, index) => {
                return <li>{item}</li>;
              })}
            </ul>

            <a href="!#">Sign up for free</a>
          </div>

          <div className="box">
            <span>Pro</span>
            <h1 className="price">
              <b>$ 15</b> /mo
            </h1>

            <ul className="texts">
              {card2.map((item, index) => {
                return <li>{item}</li>;
              })}
            </ul>

            <a href="!#">Get started</a>
          </div>

          <div className="box">
            <span>Enterprise</span>
            <h1 className="price">
              <b>$ 29</b> /mo
            </h1>

            <ul className="texts">
              {card3.map((item, index) => {
                return <li>{item}</li>;
              })}
            </ul>

            <a href="!#">Contact Us</a>
          </div>
        </div>
      </div>
    );
  }
}
