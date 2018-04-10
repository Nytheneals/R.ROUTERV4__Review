import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// ***********************************OTHER COMPONENTS*********************************** //

// Child
const Child = ({ match }) => (
  <div>
    <div className="result" uj>
      {" "}
      ID : {match.params.id}
    </div>
  </div>
);

// ***********************************OTHER COMPONENTS*********************************** //

class App extends Component {
  render() {
    return (
      <Router>
        <div className="nav">
          <div className="item">
            <Link to="/netflix">Netflix</Link>
          </div>
          <div className="item">
            <Link to="/hulu">Hulu</Link>
          </div>
          <div className="item">
            <Link to="/cinemadelux">Cinema de Lux</Link>
          </div>
          <div className="item">
            <Link to="/amc">AMC</Link>
          </div>

          <Route path="/:id" component={Child} />
        </div>
      </Router>
    );
  }
}
export default App;
