import React from "react";
import { ChatList } from "./component/Chats/ChatList";
import { ServicesPets } from "./component/ServicesPets/ServicesPets";
import { UserInfo } from "./component/UserInfo/UserInfo";

export const Dashboard = () => {
  return (
    <div className="container pt-4 d-flex">
      <div className="col-5 mt-4">
        <UserInfo />
      </div>
      <div className="col-8">
        <ServicesPets />
        <div id="/chat">
        <ChatList />
        </div>
      </div>
    </div>
  );
};
