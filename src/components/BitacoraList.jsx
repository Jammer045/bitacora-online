import React from 'react';

export default function BitacoraList({ bitacoras }) {
  return (
    <>
      <h2 className="title">📋 Registros recientes</h2>
      {bitacoras.length === 0 ? (
        <p className="text-gray-500">No hay registros todavía.</p>
      ) : (
        <ul className="space-y-4">
          {bitacoras.map((b) => (
            <li key={b.id} className="border-b pb-3">
              <div className="flex justify-between">
                <h3 className="font-semibold text-lg">{b.titulo}</h3>
                <span className="text-sm text-gray-500">{b.fechaRegistro}</span>
              </div>
              <p className="text-gray-700 text-sm mt-1">{b.descripcion}</p>
              {b.fotoUrl && (
                <img
                  src={b.fotoUrl}
                  alt="Evidencia"
                  className="mt-2 rounded-lg max-h-48 object-cover"
                />
              )}
              <div className="mt-2 text-xs text-gray-500">
                <strong>Área:</strong> {b.area} | <strong>Sector:</strong> {b.sector} |{" "}
                <strong>Severidad:</strong> {b.severidad}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
