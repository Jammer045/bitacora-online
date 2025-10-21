export const loadBitacoras = () => {
  const data = localStorage.getItem("bitacoras");
  return data ? JSON.parse(data) : [];
};

export const saveBitacoras = (bitacoras) => {
  localStorage.setItem("bitacoras", JSON.stringify(bitacoras));
};
