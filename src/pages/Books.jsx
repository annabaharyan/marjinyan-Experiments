import React from "react";

export default function Books(props) {
  return (
    <div>
      <img
        src={props.pic}
        alt=""
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />
      <h5>{props.title}</h5>
      <p>{props.lang}</p>
    </div>
  );
}
