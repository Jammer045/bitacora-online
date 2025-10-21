import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BitacoraProvider } from "./context/Bitacoracontext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BitacoraProvider>
      <App />
    </BitacoraProvider>
  </React.StrictMode>
);
