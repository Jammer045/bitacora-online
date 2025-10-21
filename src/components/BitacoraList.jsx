import React from "react";
import BitacoraItem from "./BitacoraItem.jsx";
import { useBitacora } from "../hooks/useBitacora.js";

export default function BitacoraList() {
  const { bitacoras } = useBitacora();

  if (bitacoras.length === 0) return <p>No hay registros en la bitácora.</p>;

  return (
    <div className="bitacora-list">
      {bitacoras.map((b) => (
        <BitacoraItem key={b.id} bitacora={b} />
      ))}
    </div>
  );
}
