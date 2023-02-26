import React, { useState } from "react";
import "./messages.css";
import { MessagesModal } from "./modal/MessagesModal";

const messagesList = [
  {
    id: 1,
    transmitter_id: 1,
    receiver_id: 2,
    date: "13/2/2023",
    content: "Hola, me interesa el servicio...",
  },
  {
    id: 2,
    transmitter_id: 1,
    receiver_id: 2,
    date: "13/2/2023",
    content: "Hola, me interesa el servicio...",
  },
  {
    id: 3,
    transmitter_id: 1,
    receiver_id: 2,
    date: "13/2/2023",
    content: "Hola, me interesa el servicio...",
  },
  {
    id: 4,
    transmitter_id: 1,
    receiver_id: 2,
    date: "13/2/2023",
    content: "Hola, me interesa el servicio...",
  },
];

export const Messages = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white">
      <p className="fs-4">Messages</p>
      <div className="w-100">
        <div className="d-flex gap-3">
          <a className="btn btn-dark px-3 rounded-pill text-white">Recibidos</a>
          <a className="btn btn-dark px-3 rounded-pill text-white">Enviados</a>
        </div>
        <div className="messages p-3 my-3 w-100">
          {messagesList.map((message) => (
            <div key={message.id} className="d-flex gap-3 px-4 border-bottom align-items-center justify-content-between">
              <div className="d-flex h-100 align-items-center gap-3">
                <p className="fs-5">{message.transmitter_id}</p>
                <p className="text-muted">{message.date}</p>
              </div>
              <a className="btn btn-dark text-white rounded-pill" onClick={handleOpenModal}>abrir</a>
              {openModal && <MessagesModal content={message.content} handleOpenModal={handleOpenModal} />}
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
};
