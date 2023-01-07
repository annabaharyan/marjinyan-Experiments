import React from "react";
import s from "./style.module.css";
const MyBook = (props) => {
  return (
    <div className={s.book}>
      <img src={props.pic} alt="nkar" />
      <h4>{props.title}</h4>
      <p>{props.author}</p>
      <button>Order</button>
    </div>
  );
};

export default MyBook;
