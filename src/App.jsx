import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Topic from "./components/Topics";

// ***********************************OTHER COMPONENTS*********************************** //

// HOME
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

// ABOUT
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

// ***********************************OTHER COMPONENTS*********************************** //

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topic </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topic} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
