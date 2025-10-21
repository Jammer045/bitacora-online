import { useContext } from "react";
import { BitacoraContext } from "../context/BitacoraContext.jsx";

export const useBitacora = () => {
  return useContext(BitacoraContext);
};