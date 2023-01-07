import React, { useState } from "react";
import { useForm } from "react-hook-form";
const MyForm = () => {
  const [state, setState] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addUser = (data) => {
  setState([...state,data])
  };
  return (
    <div>
      <h1>Sighn up</h1>
      {errors.name && <p>Name is required</p>}
      {errors.age && <p>Age must be between 18 and 63</p>}
     
      <form onSubmit={handleSubmit(addUser)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name", { required: true })} />
        </div>
        <div>
          <label>Surname</label>
          <input type="text" {...register("surname")} />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            {...register("age", { min: 18, max: 62, pattern: /[\d]/ })}
          />
        </div>
        <button>Save</button>
      </form>
      {state.map((item,i)=>(
        <p key={i}>{item.name} {item.surname}, {item.age} years old</p>
      ))}
    </div>
  );
};

export default MyForm;
