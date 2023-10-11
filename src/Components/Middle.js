import React, { Component } from "react";
import Card from "./Card";

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
          <Card
            span="Free"
            price="0"
            info1="10 users included"
            info2="2 GB of storage"
            info3="Email support"
            info4="Help center access"
            btn="Sign up for free"
          />

          <Card
            span="Pro"
            price="15"
            info1="20 users included"
            info2="10 GB of storage"
            info3="Priority email support"
            info4="Help center access"
            btn="Get started"
          />

          <Card
            span="Enterprise"
            price="29"
            info1="30 users included"
            info2="15 GB of storage"
            info3="Phone and email support"
            info4="Help center access"
            btn="Contact Us"
          />
        </div>
      </div>
    );
  }
}
