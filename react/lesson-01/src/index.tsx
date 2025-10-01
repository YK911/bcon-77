import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import "modern-normalize";
// import "the-new-css-reset";

import "./index.css";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
