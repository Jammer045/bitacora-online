import React from "react";
import { useState } from "react";
import BitacoraForm from "./components/BitacoraForm";
import BitacoraList from "./components/BitacoraList";

export default function App() {
  const [bitacoras, setBitacoras] = useState([]);

  const agregarBitacora = (nueva) => {
    setBitacoras((prev) => [...prev, nueva]);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      <div className="card w-full md:w-1/3">
        <BitacoraForm onAdd={agregarBitacora} />
      </div>
      <div className="card flex-1 overflow-y-auto">
        <BitacoraList bitacoras={bitacoras} />
      </div>
    </div>
  );
}
