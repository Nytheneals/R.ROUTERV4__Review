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
        <div className="nav">
          <div className="item">
            <Link to="/">Home</Link>
          </div>
          <div className="item">
            <Link to="/topics">Topic </Link>
          </div>
          <div className="item">
            <Link to="/about">About</Link>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topic} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
