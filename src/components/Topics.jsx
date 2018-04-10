import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Top = ({ match }) => (
  <div>
    <h1>{match.params.urlID}</h1>
  </div>
);

class Topic extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/topics/bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/topics/locations">Locations </Link>
            </li>
            <li>
              <Link to="/topics/packages">Packages</Link>
            </li>
          </ul>

          <Route path="/topics/:urlID" component={Top} />
        </div>
      </Router>
    );
  }
}

export default Topic;
