import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes";
import Navbar from "./containers/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
