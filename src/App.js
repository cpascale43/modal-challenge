import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

import "./App.css";

export default function App() {
  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <Router>
      <div id="App" onMouseMove={handleMouseMove}>
        <div className="container">
          <nav>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                justifyContent: "flex-end",
              }}
            >
              <li style={{ marginRight: "1em" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ marginRight: "1em" }}>
                <Link to="/1">Page One</Link>
              </li>
              <li>
                <Link to="/2">Page Two</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/1">
              <PageOne />
            </Route>
            <Route path="/2">
              <PageTwo />
            </Route>
            <Route path="/">
              <ShowCoordinates {...coordinates} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function ShowCoordinates({ x, y }) {
  return (
    <div>
      {x || y
        ? "The mouse is at x: " + x + ", y: " + y
        : "Move the mouse"}
    </div>
  );
}
