import React, { useContext, useEffect, useState } from "react";

export const ChatCard = ({ handleOpenModal, chat, client_name, client_surname, client_avatar }) => {
  return (
    <div
      className="p-3 chat d-flex gap-3 align-items-center bg-white"
      onClick={() => handleOpenModal(chat.id, client_name, client_surname, client_avatar)}
    >
      <div className="avatar d-flex justify-content-center">
        <img className="rounded-circle h-100" src={client_avatar} />
      </div>
      <span className="ml-3 fs-3 fw-bold">{client_name} {client_surname}</span>
    </div>
  );
};
