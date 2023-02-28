import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../store/appContext";
import { ServicesPetsModal } from "./modal/ServicesPetsModal";
import "./servicespets.css";

export const ServicesPets = () => {
  const { store, actions } = useContext(Context);
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
    actions.setClientInfo()
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return store.clientInfo?
    <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white">
      <p className="fs-4">
        {store.clientInfo.roles === "Owner" ? "Mis Mascotas" : "Mis Servicios"}
      </p>
      <div className="w-100">
        {store.clientInfo.roles === "Owner"
          ? items.map((item) => (
              <div
                key={item.id}
                className="p-2 d-flex gap-3 mb-2 pet-service-card"
              >
                <div className="img-container mr-2">
                  <img className="img-fluid" src={item.image} />
                </div>
                <div>
                  <p className="fs-4">{item.name}</p>
                  <p className="fs-6">{item.description}</p>
                </div>
                <i className="fa-solid fa-pen-to-square fs-4 edit-button"></i>
              </div>
            ))
          : items.map((item) => (
              <div
                key={item.id}
                className="p-2 d-flex gap-3 mb-2 pet-service-card"
              >
                <div className="img-container mr-2">
                  <img className="img-fluid" src={item.image} />
                </div>
                <div>
                  <div className="d-flex gap-3">
                    <p className="fs-4">{item.title}</p>
                    <p className="fs-4 text-warning">${item.price}</p>
                  </div>
                  <p className="fs-6">{item.description}</p>
                </div>
                <i className="fa-solid fa-pen-to-square fs-4 edit-button"></i>
              </div>
            ))}
        <div className="p-4 d-flex mb-2 pet-service-card col-12 justify-content-center">
          <i
            className="fa-solid fa-circle-plus fs-1 add"
            onClick={handleOpenModal}
          ></i>
        </div>
      </div>
      {openModal && (
        <ServicesPetsModal
          getItems={getItems}
          handleOpenModal={handleOpenModal}
        />
      )}
    </div> : null
};
