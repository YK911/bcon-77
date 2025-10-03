import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
import "./index.css";
import { MainApp } from "./components/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <MainApp />
  </React.StrictMode>
);
