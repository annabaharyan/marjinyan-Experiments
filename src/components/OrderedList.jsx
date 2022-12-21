import React from "react";

const OrderedList = (props) => {
    console.log("works ");
  return (
    <ol>
      {props.writers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};

export default OrderedList;
