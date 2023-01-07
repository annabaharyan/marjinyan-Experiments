import React from "react";
import m from "./modal.module.css";
const PortalModal = (props) => {
  if (props.show) {
    return (
      <div>
        <div className={m.overlay}></div>
        <div className={m.modal}>
          <div className={m.title}>{props.title}</div>
          <div className={m.content}>{props.children}</div>
          <button onClick={props.onClose} className={m.close}>
            Cancel
          </button>
          <button onClick={props.onSuccess} className={m.ok}>
            Cancel
          </button>
        </div>
      </div>
    );
  } else return null;
};

export default PortalModal;
