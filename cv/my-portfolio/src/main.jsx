import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/todo.scss";
import "./styles/swapi.scss";
import "./styles/transitions.scss";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
