import React from "react";
import { useState, useEffect } from "react";
const OrderedList = (props) => {
  useEffect(() => {
    return () => {
      props.fn(
        `OrderList Finished ${new Date().getHours()}:${new Date().getMinutes()}:${
          new Date().getSeconds() < 10
            ? "0" + new Date().getSeconds()
            : new Date().getSeconds()
        }`
      );
    };
  }, []);
  return (
    <ol>
      {props.writers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};
const UnorderedList = (props) => {
  useEffect(() => {
    return () => {
      props.fn(
        `UnorderList Finished ${new Date().getHours()}:${new Date().getMinutes()}:${
          new Date().getSeconds() < 10
            ? "0" + new Date().getSeconds()
            : new Date().getSeconds()
        }`
      );
    };
  }, []);
  return (
    <ul>
      {props.writers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
const PaymanakanRender = () => {
  const [writers, setWriters] = useState([
    "Kafka",
    "Saramago",
    "Shakespeare",
    "Joyce",
  ]);
  const [status, setStatus] = useState(true);
  const [log, setlog] = useState(null);
  return (
    <div>
      <h3>{log}</h3>
      {status ? (
        <OrderedList writers={writers} fn={setlog} />
      ) : (
        <UnorderedList writers={writers} fn={setlog} />
      )}
      <button onClick={() => setStatus(!status)}>Change List</button>
    </div>
  );
};

export default PaymanakanRender;
