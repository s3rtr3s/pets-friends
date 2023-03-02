import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../store/appContext";
import { ServicesPetsModal } from "./modal/ServicesPetsModal";
import { EditPetsModal } from "./modal/EditPetsModal";
import "./servicespets.css";

export const ServicesPets = () => {
  const { store, actions } = useContext(Context);
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [edit, setEdit] = useState(null);

  const urlAlternativa="https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898_1280.jpg";

  const getItems = async () => {
    let url;
    /*llama a la API de pets por cliente y se almacena en items*/
    if (store.clientInfo.roles === "Owner") {
      url = `api/pets_by_owner/${store.clientInfo.id}`;
    } else {
      url = `api/services_by_carer/${store.clientInfo.id}`;
    }
    const resp = await fetch(`${store.BACKEND_URL}${url}`);
    const data = await resp.json();
    setItems(data.results);
    console.log("LLamando a items",items,data.results);
  };

  const deletePet = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("hemos hecho borrado de mascota"),
    };
    const resp = await fetch(`${store.BACKEND_URL}api/pets/${id}`, options);
    const data = await resp.json();
    
    /*Si todo esta bien data=OK*/
    console.log("hemos borrado mascota",data);
  };

  /*Debe hacer solo una llamada*/
  useEffect(() => {
    actions.setClientInfo();
    getItems();

  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenEditModal = (item) => {
    setEdit(item);
    setOpenEditModal(!openEditModal);
  };

  /*Borra pet*/
  const handleDeleteModal=(item)=>{
    /*Borra pet del listado*/
    let newItems=items.filter(it => it!==item);
    setItems(newItems);
    /*Borra pet de la api*/
    deletePet(item.id);
  };

  return openEditModal ? (
    <EditPetsModal handleOpenEditModal={handleOpenEditModal} itemPet={edit} getItems={getItems} />
    ) : (
    <div className="dashboard-box container mt-5 mb-4 p-3 d-flex flex-column align-items-center bg-white">
      <p className="fs-4">
        {store.clientInfo?.roles === "Owner" ? "Mis Mascotas" : "Mis Servicios"}
      </p>
      <div className="w-100">
        {items.map((item,i) => (
          <div key={i} className="p-2 d-flex mb-2 pet-service-card">
            <div className="img-container mr-2 col-3">
              <img className="img-fluid" src={item.image? item.image :urlAlternativa} />
            </div>
            <div className="col-8">
              <p className="fs-4">{item.name}</p>
              <p className="fs-6">{item.description}</p>
            </div>
            {/*con ml-auto nos llevamos el icono a la derecha*/}
            <div className="col-1 fs-6">
              <i className="fas fa-edit mb-5"
                onClick={() => handleOpenEditModal(item)}
              ></i>
              <i className="fas fa-trash"
                onClick={() => handleDeleteModal(item)}
              ></i>
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
      {openModal && (
        <ServicesPetsModal getItems={getItems} handleOpenModal={handleOpenModal}/>
      )}
    </div>
  );
};
