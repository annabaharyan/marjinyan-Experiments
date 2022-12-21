import React, { useState } from "react";
import OrderedList from "./OrderedList";
import UnorderedList from "./UnorderedList";

const StateVsProps = () => {
  const [writers, setWriters] = useState([
    "Kafka",
    "Saramago",
    "Shakespeare",
    "Joyce",
  ]);
  const [count, setcount] = useState(0);
  return (
    <>
    <h1>{count}</h1>
      <OrderedList writers={writers} />
      <UnorderedList writers={writers} />
      <button onClick={()=>setcount(count+1)}>CountUp</button>
    </>
  );
};

export default StateVsProps;
