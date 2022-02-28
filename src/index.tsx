import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { EntityProvider } from "./etegrity/infraestructure/controllers/context/EntityProvider";

ReactDOM.render(
  <>
    <EntityProvider>
      <App />
    </EntityProvider>
  </>,
  document.getElementById("root")
);
