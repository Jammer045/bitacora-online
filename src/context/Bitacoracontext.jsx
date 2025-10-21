import React, { createContext, useState, useEffect } from "react";
import { loadBitacoras, saveBitacoras } from "../utils/storage.js";

export const BitacoraContext = createContext();

export const BitacoraProvider = ({ children }) => {
  const [bitacoras, setBitacoras] = useState([]);

  useEffect(() => {
    setBitacoras(loadBitacoras());
  }, []);

  useEffect(() => {
    saveBitacoras(bitacoras);
  }, [bitacoras]);

  const addBitacora = (data) => {
    const nuevo = {
    id: Date.now(),
    ...data,
    fechaRegistro: new Date().toLocaleString(),
  };
  setBitacoras([...bitacoras, nuevo]);
};

  const deleteBitacora = (id) => {
    setBitacoras(bitacoras.filter((b) => b.id !== id));
  };

  const updateBitacora = (id, newData) => {
    setBitacoras(bitacoras.map((b) => (b.id === id ? { ...b, ...newData } : b)));
  };

  return (
    <BitacoraContext.Provider
      value={{ bitacoras, addBitacora, deleteBitacora, updateBitacora }}
    >
      {children}
    </BitacoraContext.Provider>
  );
};
