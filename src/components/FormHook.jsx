import React from "react";
import { useForm } from "react-hook-form";
const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function addUser(data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Sighn Up</h1>
      {errors.first && errors.last && (
        <p style={{ color: "red" }}>Complete fields are required!</p>
      )}
      {errors.age && (
        <p style={{ color: "red" }}>Age must be between 18 and 30</p>
      )}
      <form onSubmit={handleSubmit(addUser)}>
        <div>
          <label>First name</label>
          <input type="text" {...register("first", { required: true })} />
        </div>
        <div>
          <label>Last name</label>
          <input type="text" {...register("last", { required: true })} />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            {...register("age", {pattern:/[\d]/, required: true, min: 18, max: 30 })}
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default FormHook;
