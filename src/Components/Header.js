import React, { Component } from "react";

const HeaderData = [
  { companyName: "Company Name" },
  { features: "Features" },
  { enterprise: "Enterprise" },
  { support: "Support" },
  { pricing: "Pricing" },
  { signUp: "Sign Up" },
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
            <a href="!#">{HeaderData[1].features}</a>
          </li>
          <li>
            <a href="!#">{HeaderData[2].enterprise}</a>
          </li>
          <li>
            <a href="!#">{HeaderData[3].support}</a>
          </li>
          <li>
            <a href="!#">{HeaderData[4].pricing}</a>
          </li>
          <li>
            <a href="!#" id="signUp">
              {HeaderData[5].signUp}
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
