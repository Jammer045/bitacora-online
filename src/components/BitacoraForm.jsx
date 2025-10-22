import { useState } from "react";

export default function BitacoraForm({ onAdd }) {
  const [form, setForm] = useState({
    area: "",
    sector: "",
    titulo: "",
    fechaEvento: "",
    severidad: "",
    descripcion: "",
    fotoUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevo = {
      id: Date.now(),
      ...form,
      fechaRegistro: new Date().toLocaleString(),
    };

    onAdd(nuevo);

    setForm({
      area: "",
      sector: "",
      titulo: "",
      fechaEvento: "",
      severidad: "",
      descripcion: "",
      fotoUrl: "",
    });
  };

  return (
    <>
      <h1 className="title">🧾 Nueva Bitácora</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Área</label>
          <input
            name="area"
            value={form.area}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <label className="label">Sector</label>
          <input
            name="sector"
            value={form.sector}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="label">Título</label>
          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="label">Fecha del evento</label>
          <input
            type="date"
            name="fechaEvento"
            value={form.fechaEvento}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="label">Severidad</label>
          <select
            name="severidad"
            value={form.severidad}
            onChange={handleChange}
            className="input"
          >
            <option value="">Selecciona</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
            <option value="Crítica">Crítica</option>
          </select>
        </div>

        <div>
          <label className="label">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            className="input h-24"
          />
        </div>

        <div>
          <label className="label">URL de la foto (Drive o web)</label>
          <input
            type="url"
            name="fotoUrl"
            value={form.fotoUrl}
            onChange={handleChange}
            className="input"
            placeholder="https://drive.google.com/..."
          />
        </div>

        <button className="btn w-full mt-2">Guardar registro</button>
      </form>
    </>
  );
}
