import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Viz from "./viz.js";

import "./styles.scss";

function App() {
return (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        ACME Biological Data Visualization
      </Navbar.Brand>
    </Navbar>
    <Container>
      <Viz />
    </Container>
  </div>
  );
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
