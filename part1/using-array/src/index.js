import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./App";

  let container = document.getElementById("root");
  let root = createRoot(container);
  
  root.render(React.createElement(App));