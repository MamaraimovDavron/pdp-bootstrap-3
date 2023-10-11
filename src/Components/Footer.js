import React, { Component } from "react";

const link1 = [
  "Cool stuff",
  "Random feature",
  "Team feature",
  "Stuff for developers",
  "Another one",
  "Last time",
];

const link2 = [
  "Resource",
  "Resource name",
  "Another resource",
  "Final resource",
];

const link3 = ["Team", "Locations", "Privacy", "Terms"];

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="box one">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-bootstrap"
            viewBox="0 0 16 16"
          >
            <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
            <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
          </svg>

          <p>© 2017-2018</p>
        </div>
        <div className="box two">
          <h1>Features</h1>
          <ul>
            <li>
              {link1.map((item, index) => (
                <a href="!#">{item}</a>
              ))}
            </li>
          </ul>
        </div>
        <div className="box three">
          <h1>Resources</h1>
          <ul>
            <li>
              {link2.map((item, index) => (
                <a href="!#">{item}</a>
              ))}
            </li>
          </ul>
        </div>
        <div className="box four">
          <h1>About</h1>
          <ul>
            <li>
              {link3.map((item) => (
                <a href="!#">{item}</a>
              ))}
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
