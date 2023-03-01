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
  const [edit,setEdit]=useState(null);

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
  };

  /*Debe hacer solo una llamada*/
  useEffect(() => {
    getItems();
    actions.setClientInfo()
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenEditModal = (item) => {
    setEdit(item);
    setOpenEditModal(!openEditModal);
  };

  return openEditModal? <EditPetsModal  
  handleOpenEditModal={handleOpenEditModal} itemPet={edit} />
    :<div className="dashboard-box container mt-5 mb-4 p-3 d-flex flex-column align-items-center bg-white">
      <p className="fs-4">
        {store.clientInfo.roles === "Owner" ? "Mis Mascotas" : "Mis Servicios"}
      </p>
      <div className="w-100">
        {items.map((item) => (
          
            <div key={item.id} className="p-2 d-flex mb-2 pet-service-card">
              <div className="img-container mr-2">
                <img className="img-fluid" src={item.image} />
              </div>
              <div>
                <p className="fs-4">{item.name}</p>
                <p className="fs-6">{item.description}</p>
              </div>
              {/*con ml-auto nos llevamos el icono a la derecha*/ }
              <div className="ml-auto"> 
                    <i className="fas fa-edit" 
                    onClick={()=>handleOpenEditModal(item)}></i>
              </div>
              {/*openEditModal && <EditPetsModal  
                          handleOpenEditModal={handleOpenEditModal} itemPet={item} />*/}
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
      )}: null
    </div> 
};
