import React, { Component } from "react";

const HeaderData = [
  { companyName: "Company Name" },
  { features: "Features" },
  { enterprise: "Enterprise" },
  { support: "Support" },
  { pricing: "Pricing" },
  { signUp: "Sign Up" },
];

const links = [
  <a href="!#">{HeaderData[1].features}</a>,
  <a href="!#">{HeaderData[2].enterprise}</a>,
  <a href="!#">{HeaderData[3].support}</a>,
  <a href="!#">{HeaderData[4].pricing}</a>,
  <a href="!#" id="signUp">
    {HeaderData[5].signUp}
  </a>,
];

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">
          <a href="!#">{HeaderData[0].companyName}</a>
        </div>

        <ul>
          <li>
            {links.map((item, index) => {
              return item;
            })}
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
