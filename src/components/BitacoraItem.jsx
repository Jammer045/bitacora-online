import React, { useState } from "react";
import { useBitacora } from "../hooks/useBitacora.js";

export default function BitacoraItem({ bitacora }) {
  const { deleteBitacora, updateBitacora } = useBitacora();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ ...bitacora });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    updateBitacora(bitacora.id, form);
    setEditMode(false);
  };

  return (
    <div className="bitacora-item">
      {editMode ? (
        <>
          <input name="titulo" value={form.titulo} onChange={handleChange} />
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <>
          <h3>{bitacora.titulo}</h3>
          <p>
            <strong>Área:</strong> {bitacora.area || "—"} <br />
            <strong>Sector:</strong> {bitacora.sector || "—"} <br />
            <strong>Fecha del evento:</strong> {bitacora.fechaEvento || "—"} <br />
            <strong>Severidad:</strong> {bitacora.severidad} <br />
            <strong>Fecha de registro:</strong> {bitacora.fechaRegistro}
          </p>
          <p>{bitacora.descripcion}</p>

          {bitacora.foto && (
  <img
    src={bitacora.foto}
    alt="Foto del evento"
    style={{ maxWidth: "100%", borderRadius: "8px" }}
  />
)}

          <button onClick={() => setEditMode(true)}>Editar</button>
          <button onClick={() => deleteBitacora(bitacora.id)}>Eliminar</button>
        </>
      )}
    </div>
  );
}
