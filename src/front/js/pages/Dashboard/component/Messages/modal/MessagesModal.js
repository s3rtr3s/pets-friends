import React from "react";
import "./messagesmodal.css"

export const MessagesModal = ({ handleOpenModal, content }) => {
  return (
    <div className="content">
      <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white col-5 msj-modal gap-3">
        <div className="w-100 d-flex justify-content-end">
            <i className="fa-solid fa-xmark p-2 close-button" onClick={handleOpenModal}></i>
        </div>
        <div className="border p-3 rounded-2 message-box w-100 close-button">
            <p>{content}</p>
        </div>
        <div className="reply-box border rounded-2 w-100 d-flex">
            <div className="col-11 h-100">
            <textarea className="w-100 h-100"/>
            </div>
            <a className="btn btn-dark d-flex justify-content-center align-items-center w-100 bg-dark text-white">
                <i className="fa-solid fa-paper-plane fs-4" ></i>
            </a>
        </div>
      </div>
    </div>
  );
};
