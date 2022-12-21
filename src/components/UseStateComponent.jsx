import React, { useState, useEffect } from "react";

export default function UseStateComponent() {
  const [count, setCount] = useState(0);
  const [deg, setDeg] = useState(0);
  useEffect(() => {
    console.log("worked");
  }, [count]);
  return (
    <>
      <h1>Welcome to React</h1>
      <h3>Count-({count})</h3>
      <h3>Deg-({deg})</h3>
      <button onClick={() => setCount(count + 1)}>change count</button>
      <button onClick={() => setDeg(deg + 10)}>Change deg</button>
    </>
  );
}
