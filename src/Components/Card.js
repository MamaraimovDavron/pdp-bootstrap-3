import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
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
    );
  }
}

export default Card;
