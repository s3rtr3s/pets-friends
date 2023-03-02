import React, { useContext } from "react";
import { Context } from "../../../../../store/appContext";
import { EditPetForm } from "./component/EditPetForm";
//import "./servicespetsmodal.css";

export const EditPetsModal = ({ handleOpenEditModal, itemPet, getItems }) => {
  const { store } = useContext(Context);
  return (
    <div className="content">
      <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white col-4 gap-3">
        <div className="w-100 d-flex justify-content-end">
          <i className="fa-solid fa-xmark p-2 close-button"
             onClick={handleOpenEditModal}>
          </i>
        </div>
        {store.clientInfo.roles === "Owner" ? (
          <EditPetForm itemPet={itemPet} handleOpenEditModal={handleOpenEditModal} getItems={getItems} />
        ) : (
          <h1>hola</h1>
        )}
      </div>
    </div>
  );
};
