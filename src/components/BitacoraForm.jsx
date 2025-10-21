import React, { useState } from "react";
import { useBitacora } from "../hooks/useBitacora.js";

export default function BitacoraForm() {
  const { addBitacora } = useBitacora();
  const [form, setForm] = useState({
    area: "",
    sector: "",
    titulo: "",
    fechaEvento: "",
    severidad: "Baja",
    descripcion: "",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFile = (e) => {
  const file = e.target.files[0];
  if (file) {
    const previewURL = URL.createObjectURL(file);
    setForm({ ...form, foto: previewURL }); // No usa localStorage
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo || !form.descripcion || !form.fechaEvento) return;
    addBitacora(form);
    setForm({
      area: "",
      sector: "",
      titulo: "",
      fechaEvento: "",
      severidad: "Baja",
      descripcion: "",
      foto: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bitacora-form">
      <div className="form-row">
        <input
          name="area"
          placeholder="Área"
          value={form.area}
          onChange={handleChange}
        />
        <input
          name="sector"
          placeholder="Sector"
          value={form.sector}
          onChange={handleChange}
        />
      </div>

      <input
        name="titulo"
        placeholder="Título del evento"
        value={form.titulo}
        onChange={handleChange}
      />

      <div className="form-row">
        <label>Fecha del evento:</label>
        <input
          type="date"
          name="fechaEvento"
          value={form.fechaEvento}
          onChange={handleChange}
        />

        <label>Severidad:</label>
        <select
          name="severidad"
          value={form.severidad}
          onChange={handleChange}
        >
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <textarea
        name="descripcion"
        placeholder="Descripción del evento"
        value={form.descripcion}
        onChange={handleChange}
      />

      <div className="form-row">
  <label>URL de foto (Drive u otra):</label>
  <input
    type="url"
    name="foto"
    placeholder="https://drive.google.com/..."
    value={form.foto || ""}
    onChange={handleChange}
  />
</div>

      <button type="submit">Registrar evento</button>
    </form>
  );
}
