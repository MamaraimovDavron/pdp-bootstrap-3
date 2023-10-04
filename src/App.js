import "./App.css";

function App() {
  return (
    <div className="container">
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
              <a href="!#">Cool stuff</a>
            </li>
            <li>
              <a href="!#">Random feature</a>
            </li>
            <li>
              <a href="!#">Team feature</a>
            </li>
            <li>
              <a href="!#">Stuff for developers</a>
            </li>
            <li>
              <a href="!#">Another one</a>
            </li>
            <li>
              <a href="!#">Last time</a>
            </li>
          </ul>
        </div>
        <div className="box three">
          <h1>Resources</h1>
          <ul>
            <li>
              <a href="!#">Resource</a>
            </li>
            <li>
              <a href="!#">Resource name</a>
            </li>
            <li>
              <a href="!#">Another resource</a>
            </li>
            <li>
              <a href="!#">Final resource</a>
            </li>
          </ul>
        </div>
        <div className="box four">
          <h1>About</h1>
          <ul>
            <li>
              <a href="!#">Team</a>
            </li>
            <li>
              <a href="!#">Locations</a>
            </li>
            <li>
              <a href="!#">Privacy</a>
            </li>
            <li>
              <a href="!#">Terms</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
