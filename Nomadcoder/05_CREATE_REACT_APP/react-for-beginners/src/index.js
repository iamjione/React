import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles.css"; //이렇게 하면 global하게 적용됨

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
