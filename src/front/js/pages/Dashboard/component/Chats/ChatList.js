import React, { useState } from "react";
import "./chatlist.css";
import { Chat } from "./modal/Chat";

const listChats = [
  {
    id: 1,
    client_1_id: 1,
    client_2_id: 2,
  },

  {
    id: 2,
    client_1_id: 1,
    client_2_id: 3,
  },

  {
    id: 3,
    client_1_id: 1,
    client_2_id: 4,
  },
];

export const ChatList = () => {
    const [openModal, setOpenModal] = useState(false);
    const [chatId, setChatId] = useState();
    const handleOpenModal = (id) => {
        setChatId(id)
        setOpenModal(!openModal)
    }
  return (
    <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white">
        <p className="fs-4">Mis Chats</p>
        <div className="w-100 chat-list p-3 d-flex flex-column gap-3">
            {listChats.map(chat => (
                <div key={chat.id} className="p-3 chat text d-flex justify-content-center bg-white" onClick={() => handleOpenModal(chat.id)}>
                    <span>{chat.client_2_id}</span>
                </div>
            ))}
        </div>
        {openModal && <Chat chatId={chatId} handleOpenModal={handleOpenModal} />}
    </div>
  );
};
