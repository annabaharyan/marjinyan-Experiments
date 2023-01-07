import React from "react";
import MyBook from "../Book/MyBook";
import s from "./style.module.css";
const BookList = (props) => {
  return (
    <div className={s.list}>
      {console.log(props)}
      {props.books.map((book) => (
        <MyBook key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
