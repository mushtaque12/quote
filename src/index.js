import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";

import "./styles.css";

const App = () => {
  return <Container />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
