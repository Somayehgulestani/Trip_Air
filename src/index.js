import React from "react";
import ReactDom from "react-dom/client";
import "./tailwind.css";

// import { CarRental } from "./CarRental.js";
import App from "./Trip.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CarRental /> */}
    <App />
  </React.StrictMode>,
);
