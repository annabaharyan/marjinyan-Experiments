import React from "react";
import { useRef } from "react";

const FormValidation = () => {
  const name = useRef();
  const age = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
  }
  return (
    <div>
      <h1>Working with Forms uncontrolled input, working with DOM(useRef)</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} />
        <input type="text" ref={age} />
        <button>Send</button>
      </form>
    </div>
  );
};

export default FormValidation;
