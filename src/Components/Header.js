import React, { Component } from "react";

let menu = [
  "Company Name",
  "Features",
  "Enterprise",
  "Support",
  "Pricing",
  "Sign Up",
];

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">
          <a href="!#">{menu[0]}</a>
        </div>

        <ul>
          <li>
            {menu.map((item, index) => {
              if (index > 0 && index < 5) return <a href="!#">{item}</a>;
            })}
          </li>

          <li>
            <a href="!#" id="signUp">
              {menu[5]}
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
