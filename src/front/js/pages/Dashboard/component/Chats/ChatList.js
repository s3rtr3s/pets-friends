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
                <div key={chat.id} className="p-3 chat text d-flex gap-3 align-items-center bg-white" onClick={() => handleOpenModal(chat.id)}>
                    <div className="avatar d-flex justify-content-center">
                      <img className="rounded-circle h-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    </div>
                    <span className="fs-5 fw-bold">{chat.client_2_id}</span>
                </div>
            ))}
        </div>
        {openModal && <Chat chatId={chatId} handleOpenModal={handleOpenModal} />}
    </div>
  );
};
