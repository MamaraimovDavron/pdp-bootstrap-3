import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">
          <a href="!#">Company Name</a>
        </div>

        <ul>
          <li>
            <a href="!#">Features</a>
          </li>
          <li>
            <a href="!#">Enterprise</a>
          </li>
          <li>
            <a href="!#">Support</a>
          </li>
          <li>
            <a href="!#">Pricing</a>
          </li>
          <li>
            <a href="!#" id="signUp">
              Sign Up
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
