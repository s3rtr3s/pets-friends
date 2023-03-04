import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../../../../store/appContext";

export const Chat = ({ handleOpenModal, chatId, chatName, chatAvatar }) => {
  const { store } = useContext(Context);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState({
    chat_id: chatId,
    date: "",
    content: "",
    client_id: store.clientInfo.id,
  });
  const divRef = useRef(null);

  const getMessages = async () => {
    const resp = await fetch(store.BACKEND_URL + "api/message/" + chatId);
    const data = await resp.json();
    setMessages(data.results);
  };

  const sendMessage = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    };
    const resp = await fetch(store.BACKEND_URL + "api/message", options);
    const data = await resp.json();
    data && getMessages();
    setNewMessage({ ...newMessage, content: "" });
  };

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages();
    }, 1000);
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="content">
      <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white col-4 gap-3">
        <div className="w-100 d-flex justify-content-between">
          <div className="col-10 d-flex align-items-center gap-3">
            <div className="avatar d-flex justify-content-center">
              <img className="rounded-circle h-100" src={chatAvatar} />
            </div>
            <span className="fs-5 fw-bold">{chatName}</span>
          </div>
          <i
            className="fa-solid fa-xmark p-2 close-button"
            onClick={handleOpenModal}
          ></i>
        </div>
        <div
          ref={divRef}
          className="chat-box messages w-100 d-flex flex-column gap-3 p-3"
        >
          {messages
            ?.sort((a, b) => a.id - b.id)
            .map((message) => {
              if (message.client_id === store.clientInfo.id) {
                return (
                  <div
                    key={message.id}
                    className="message col-8 bg-white align-self-end"
                  >
                    {message.content}
                  </div>
                );
              } else {
                return (
                  <div
                    key={message.id}
                    className="message col-8 bg-dark text-white align-self-start"
                  >
                    {message.content}
                  </div>
                );
              }
            })}
        </div>
        <div className="d-flex w-100">
          <textarea
            className="text-message col-10"
            value={newMessage.content}
            onChange={(e) =>
              setNewMessage({
                ...newMessage,
                content: e.target.value,
                date: new Date().toString(),
              })
            }
          />
          <a
            onClick={sendMessage}
            className="btn btn-dark text-white col-2 d-flex align-items-center justify-content-center"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
