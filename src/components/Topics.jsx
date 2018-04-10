import React from "react";
import { Route, Link } from "react-router-dom";

const Top = ({ match }) => (
  <div>
    <h1>{match.params.urlID}</h1>
  </div>
);

const Topic = ({ match }) => (
  <div className="nav2">
    <div className="item">
      <Link to={`${match.url}/bookings`}>Bookings</Link>
    </div>
    <div className="item">
      <Link to={`${match.url}/locations`}>Locations </Link>
    </div>
    <div className="item">
      <Link to={`${match.url}/packages`}>Packages</Link>
    </div>

    <Route path="/topics/:urlID" component={Top} />
    <Route
      exact
      path={match.url}
      render={() => <h1>What would you like to do</h1>}
    />
  </div>
);

export default Topic;
