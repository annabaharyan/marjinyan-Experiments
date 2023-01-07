import React, { useState } from "react";
import "./modal.css";
import MyModal from "./MyModal";
export default function ShowModal() {
  const [status, setStatus] = useState(false);
  return (
    <div className={status?"overlay":null}>
      <button className="btnOpen" onClick={() => setStatus(true)}>
        Open Modal
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
        quisquam, incidunt optio eveniet dicta dolore nemo atque mollitia
        doloremque. Magni voluptate in quo voluptatibus ipsam harum, repudiandae
        esse illo labore ex. Soluta, error corrupti natus accusantium
        dignissimos libero saepe laboriosam expedita ullam quia officiis.
        Aperiam sit assumenda rem nesciunt!
      </p>
      <MyModal status={status} setStatus={setStatus}>
        <h3>Hello from modal</h3>
        <p>Some text in modal</p>
      </MyModal>
    </div>
  );
}
