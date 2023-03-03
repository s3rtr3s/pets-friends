import React from "react";

const chatContent = [
  {
    id: 1,
    chat_id: 1,
    client_id: 2,
    date: "2020-05-12T23:51:21.817Z",
    content: "holaaaaaa",
  },
  {
    id: 3,
    chat_id: 1,
    client_id: 2,
    date: "2020-05-12T23:53:21.817Z",
    content: "hoasd",
  },
  {
    id: 2,
    chat_id: 1,
    client_id: 1,
    date: "2020-05-12T23:52:21.817Z",
    content: "holaaaaaa",
  },
];

export const Chat = ({ handleOpenModal, chatId }) => {
  return (
    <div className="content">
      <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white col-4 gap-3">
        <div className="w-100 d-flex justify-content-end">
          <i
            className="fa-solid fa-xmark p-2 close-button"
            onClick={handleOpenModal}
          ></i>
        </div>
        <div className="messages w-100 d-flex flex-column gap-3 p-3">
          {chatContent
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((message) => {
              if (message.client_id !== 1) {
                return (
                  <div className="message col-8 bg-white align-self-end">
                    {message.content}
                  </div>
                );
              } else {
                return (
                  <div className="message col-8 bg-white align-self-start">
                    {message.content}
                  </div>
                );
              }
            })}
            <form>
                <textarea className="bg-white"/>
            </form>
        </div>
      </div>
    </div>
  );
};
