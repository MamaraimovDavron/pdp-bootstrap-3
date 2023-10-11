import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { span, price, info1, info2, info3, info4, btn } = this.props;
    return (
      <div className="box">
        <span>{span}</span>
        <h1 className="price">
          <b>$ {price}</b> /mo
        </h1>

        <div className="texts">
          <h3>{info1}</h3>
          <h3>{info2}</h3>
          <h3>{info3}</h3>
          <h3>{info4}</h3>
        </div>

        <a href="!#">{btn}</a>
      </div>
    );
  }
}

export default Card;
