import React, { useContext, useState } from "react";
import { Context } from "../../../../../../store/appContext";

export const EditServiceForm = ({ handleOpenEditModal, itService,getItems }) => {
  const { store } = useContext(Context);
  const [serviceInfo, setServiceInfo] = useState({
    title: itService.name,
    image: itService.url,
    price: itService.price,
    description: itService.description,
    carer_id: store.clientInfo.id,
  })

  const saveService = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceInfo)
    };
    const resp = await fetch(`${store.BACKEND_URL}api/services`, options);
    const data = await resp.json();
    console.log("dentro de async",data);
  };

  const handleClick = () => {
    saveService();
    getItems(); 
    handleOpenEditModal();
  };

  return (
    <form className="dashboard-form gap-3 p-3 w-100 d-flex flex-column align-items-center">
      <p>Edita el Servicio</p>
      <label className="fs-5 fw-bold">Nombre</label>
      <input
        className="col-8"
        value={itService.name}
        onChange={(e) => setServiceInfo({ ...serviceInfo, name: e.target.value })}
      />

      <label className="fs-5 fw-bold">Imagen</label>
      <input
        className="col-8" type="url"
        value={itService.image}
        onChange={(e) => setServiceInfo({ ...serviceInfo, image: e.target.value })}
      />

      <label className="fs-5 fw-bold">Descripción</label>
      <input
        className="col-8"
        value={itService.description}
        onChange={(e) =>
          setServiceInfo({ ...serviceInfo, description: e.target.value })
        }
      />
      <span
        className="btn btn-dark rounded-pill px-3 text-white"
        onClick={handleClick}
      >
        Guardar
      </span>
    </form>
  );
};
