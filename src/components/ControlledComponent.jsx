import React from "react";
import { useState } from "react";
const ControlledComponent = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });
  const hundleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(user);
  return (
    <div>
      <h1>Working with Forms. Controlled Componet ,virtualDom, useState</h1>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          value={user.age}
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledComponent;
