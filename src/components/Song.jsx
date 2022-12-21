import React from "react";

export default function Song({ title, singer, duration }) {
  return (
    <div className="song">
      <h3>{title}</h3>
      <p>{singer}</p>
      <p>{duration}</p>
      <div className="buttons">
        <button className="btn">Play</button>
        <button className="btn">Download</button>
      </div>
    </div>
  );
}
