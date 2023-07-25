import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createRoot } from "react-dom/client";

  let container = document.getElementById("root");
  let root = ReactDOM.createRoot(container);
  
  root.render(React.createElement(App));