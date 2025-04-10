import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way in React 18
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
