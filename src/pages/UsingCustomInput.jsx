import React, { useState } from "react";
import { useInput } from "../hooks/useInput";
const UsingCustomInput = () => {
  const [formValue, setformValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setformValue({ login: Login.value, psw: Password.value });
  };

  const Login = useInput("text");
  const Password = useInput("password");
  
  return (
    <form onSubmit={handleSubmit}>
      <input {...Login} />
      <input {...Password} />
      <button>Save</button>
    </form>
  );
};

export default UsingCustomInput;
