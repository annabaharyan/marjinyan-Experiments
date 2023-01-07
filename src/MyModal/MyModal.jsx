import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
export default function MyModal({ status, setStatus, children }) {
  if (status) {

    return  ReactDOM.createPortal(<div
        className={status ? "modal active" : "modal"}
        onClick={() => setStatus(false)}
      >
        <div
          className={status ? "modal-content active" : "modal-content"}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>,document.getElementById("modal"))
  } else return null;
}
