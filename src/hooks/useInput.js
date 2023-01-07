import { useState } from "react";

export const useInput = (type) => {
  const [value, setvalue] = useState("");
  const onChange = (e) => {
    setvalue(e.target.value);
  }
  const reset = () => setvalue("");
  return { type, onChange, value, reset };
};
