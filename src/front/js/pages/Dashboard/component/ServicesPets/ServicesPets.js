import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../store/appContext";
import { ServicesPetsModal } from "./modal/ServicesPetsModal";
import "./servicespets.css";

export const ServicesPets = () => {
  const { store } = useContext(Context);
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getItems = async () => {
    let url;
    if (store.clientInfo.roles === "Owner") {
      url = `api/pets_by_owner/${store.clientInfo.id}`;
    } else {
      url = `api/services_by_carer/${store.clientInfo.id}`;
    }
    const resp = await fetch(`${store.BACKEND_URL}${url}`);
    const data = await resp.json();
    setItems(data.results);
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white">
      <p className="fs-4">
        {store.clientInfo.roles === "Owner" ? "Mis Mascotas" : "Mis Servicios"}
      </p>
      <div className="w-100">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-2 d-flex mb-2 pet-service-card col-12"
          >
            <div className="img-container mr-2">
              <img className="img-fluid" src={item.image} />
            </div>
            <div>
              <p className="fs-4">{item.name}</p>
              <p className="fs-6">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="p-4 d-flex mb-2 pet-service-card col-12 justify-content-center">
          <i
            className="fa-solid fa-circle-plus fs-1 add"
            onClick={handleOpenModal}
          ></i>
        </div>
      </div>
      {openModal && <ServicesPetsModal getItems={getItems} handleOpenModal={handleOpenModal} />}
    </div>
  );
};
