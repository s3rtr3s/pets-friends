import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../../store/appContext";

export const ChatCard = ({ handleOpenModal, chat, client_name, client_avatar }) => {
//   const { store } = useContext(Context);
//   const [lastMessageId, setLastMessageId] = useState(0);
//   const [notification, setNotification] = useState(false);

//   const getLastMessage = async () => {
//     const resp = await fetch(store.BACKEND_URL + "api/message/" + chat.id);
//     const data = await resp.json();
//     const message = data.results[data.results.length - 1]
//     if (message.id > lastMessageId) {
//         if (message.id !== null && message.id > lastMessageId) {
//             setNotification(true)
//         }
//         setLastMessageId(message.id)
//     }
//   };

//   useEffect(() => {
//     getLastMessage();

//     const interval = setInterval(() => {
//         getLastMessage();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div
      className="p-3 chat d-flex gap-3 align-items-center bg-white"
      onClick={() => handleOpenModal(chat.id, client_name, client_avatar)}
    >
      <div className="avatar d-flex justify-content-center">
        <img className="rounded-circle h-100" src={client_avatar} />
      </div>
      <span className="fs-5 fw-bold">{client_name}</span>
      {/* {notification && (
        <span className="bell text-white rounded-pill align-items-center bg-warning fs-6">
          <i className="fa-solid fa-bell fs-5 p-2 text-dark"></i>
        </span>
      )} */}
    </div>
  );
};
