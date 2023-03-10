import React, { useContext, useEffect, useState } from "react";
import "./chatlist.css";
import { Chat } from "./modal/Chat";
import { Context } from "../../../../store/appContext";
import { ChatCard } from "./component/ChatCard";

export const ChatList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [chatId, setChatId] = useState();
  const [chatName, setChatName] = useState();
  const [chatAvatar, setChatAvatar] = useState();
  const { store } = useContext(Context);
  const [chatList, setChatList] = useState();

  const handleOpenModal = (id, name, avatar) => {
    setChatId(id);
    setChatName(name);
    setChatAvatar(avatar);
    setOpenModal(!openModal);
  };

  const getChatList = async () => {
    const resp = await fetch(
      store.BACKEND_URL + "api/chats/" + store.clientInfo.id
    );
    const data = await resp.json();
    setChatList(data.results);
  };

  useEffect(() => {
    getChatList();
  }, []);

  return (
    <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white">
      <p className="fs-4 fw-bold">Mis Chats</p>
      <div className="w-100 chat-list p-3 d-flex flex-column gap-3">
        {chatList?.map((chat) => {
          const client_name =
            chat.client_2_id === store.clientInfo.id
              ? chat.client_1_name
              : chat.client_2_name;
          const client_avatar =
            chat.client_2_id === store.clientInfo.id
              ? chat.client_1_avatar
              : chat.client_2_avatar;
          return (
            <ChatCard handleOpenModal={handleOpenModal} key={chat.id} chat={chat} client_name={client_name} client_avatar={client_avatar} />
          );
        })}
      </div>
      {openModal && (
        <Chat
          chatId={chatId}
          chatName={chatName}
          chatAvatar={chatAvatar}
          handleOpenModal={handleOpenModal}
        />
      )}
    </div>
  );
};
