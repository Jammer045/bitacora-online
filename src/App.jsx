import React from "react";
import BitacoraForm from "./components/BitacoraForm.jsx";
import BitacoraList from "./components/BitacoraList.jsx";

export default function App() {
  return (
    <div className="app">
      <h1>Bitácora Online</h1>
      <BitacoraForm />
      <BitacoraList />
    </div>
  );
}
