import React, { useContext, useState } from "react";
import { Context } from "../../../../../../store/appContext";

export const ServiceForm = ({ handleOpenModal }) => {
  const { store } = useContext(Context);
  const [serviceInfo, setServiceInfo] = useState({
        title: "",
        image:"",
        price: null,
        description: "",
        service_type:1,
        carer_id: store.clientInfo.id,
  });

  const addService = async () => {

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    };
    try {
      const resp = await fetch(`${store.BACKEND_URL}api/services`, options);
      const data = await resp.json();
      console.log("dentro de addservice",data);
    } catch (error) {
      console.error("Hay un error en el metodo",error);
    }
  };
  
  const handleClick = () => {
    addService();
    handleOpenModal();
  };

  return (
    <form className="dashboard-form gap-3 p-3 w-100 d-flex flex-column align-items-center">
      <label className="fs-5 fw-bold">Titulo</label>
      <input type="text"
        className="col-8"
        value={serviceInfo.title}
        onChange={(e) =>setServiceInfo({ ...serviceInfo, title: e.target.value })}
      />

      <label className="fs-5 fw-bold">Precio</label>
      <input
        className="col-8" type="number"
        value={serviceInfo.price}
        onChange={(e) =>setServiceInfo({ ...serviceInfo, price: e.target.value })}
      />
      <label className="fs-5 fw-bold">Imagen</label>
      <input type="text"
        className="col-8"
        value={serviceInfo.image}
        onChange={(e) =>setServiceInfo({ ...serviceInfo, image: e.target.value })}
      />
      <label className="fs-5 fw-bold">Descripción</label>
      <input type="text"
        className="col-8"
        value={serviceInfo.description}
        onChange={(e) =>setServiceInfo({ ...serviceInfo, description: e.target.value })}
      />
      <a
        className="btn btn-dark rounded-pill px-3 text-white"
        onClick={handleClick}
      >
        save
      </a>
    </form>
  );
};
