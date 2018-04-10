import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

// import App from "./Basics_/App";
import App from "./URLParams_/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
