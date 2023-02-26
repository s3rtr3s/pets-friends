import React, { useContext, useState } from "react";
import { Context } from "../../../../../../store/appContext";

export const ServiceForm = ({ handleOpenModal }) => {
  const { store } = useContext(Context);
  const [serviceInfo, setServiceInfo] = useState({
    title: "",
    price: "",
    description: "",
    carer_id: store.clientInfo.id
  })


  return (
    <form className="dashboard-form gap-3 p-3 w-100 d-flex flex-column align-items-center">
      <label className="fs-5 fw-bold">Titulo</label>
      <input
        className="col-8"
        value={serviceInfo.title}
        onChange={(e) => setServiceInfo({ ...serviceInfo, title: e.target.value })}
      />
      <label className="fs-5 fw-bold">Precio</label>
      <input
        className="col-8"
        value={serviceInfo.price}
        onChange={(e) => setServiceInfo({ ...serviceInfo, price: e.target.value })}
      />
      <label className="fs-5 fw-bold">Descripción</label>
      <input
        className="col-8"
        value={serviceInfo.description}
        onChange={(e) =>
          setServiceInfo({ ...serviceInfo, description: e.target.value })
        }
      />
      <a
        className="btn btn-dark rounded-pill px-3 text-white"
      >
        save
      </a>
    </form>
  );
};
