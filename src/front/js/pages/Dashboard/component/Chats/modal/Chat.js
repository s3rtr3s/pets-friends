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
        <div className="w-100 d-flex justify-content-between">
          <div className="col-10 d-flex align-items-center gap-3">
            <div className="avatar d-flex justify-content-center">
              <img
                className="rounded-circle h-100"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
            <span className="fs-5 fw-bold">{chatId}</span>
          </div>
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
          <form className="w-full d-flex">
            <textarea className="text-message bg-white col-10" />
            <a className="btn btn-dark text-white col-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-paper-plane"></i>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
